webpackJsonp([57],{1316:function(e,t){e.exports={content:["article",{},["p","Country Name (2 letter code) ",["span","AU"],":US\nState or Province Name (full name) ",["span","Some-State"],":New York\nLocality Name (eg, city) []:Brooklyn\nOrganization Name (eg, company) ",["span","Internet Widgits Pty Ltd"],":Example Brooklyn Company\nOrganizational Unit Name (eg, section) []:Technology Division\nCommon Name (e.g. server FQDN or YOUR name) []:examplebrooklyn.com\nEmail Address []:\nIf you want to non-interactively answer the CSR information prompt, you can do so by adding the -subj option to any OpenSSL commands that request CSR information. Here is an example of the option, using the same information displayed in the code block above:"],["p",'-subj "/C=US/ST=New York/L=Brooklyn/O=Example Brooklyn Company/CN=examplebrooklyn.com"\nNow that you understand CSRs, feel free to jump around to whichever section of this guide that covers your OpenSSL needs.'],["p","Generating CSRs\nThis section covers OpenSSL commands that are related to generating CSRs (and private keys, if they do not already exist). CSRs can be used to request SSL certificates from a certificate authority."],["p","Keep in mind that you may add the CSR information non-interactively with the -subj option, mentioned in the previous section."],["p","Generate a Private Key and a CSR\nUse this method if you want to use HTTPS (HTTP over TLS) to secure your Apache HTTP or Nginx web server, and you want to use a Certificate Authority (CA) to issue the SSL certificate. The CSR that is generated can be sent to a CA to request the issuance of a CA-signed SSL certificate. If your CA supports SHA-2, add the -sha256 option to sign the CSR with SHA-2."],["p","This command creates a 2048-bit private key (domain.key) and a CSR (domain.csr) from scratch:"],["p","openssl req \\\n       -newkey rsa:2048 -nodes -keyout domain.key \\\n       -out domain.csr\nAnswer the CSR information prompt to complete the process."],["p","The -newkey rsa:2048 option specifies that the key should be 2048-bit, generated using the RSA algorithm. The -nodes option specifies that the private key should not be encrypted with a pass phrase. The -new option, which is not included here but implied, indicates that a CSR is being generated."],["p","Generate a CSR from an Existing Private Key\nUse this method if you already have a private key that you would like to use to request a certificate from a CA."],["p","This command creates a new CSR (domain.csr) based on an existing private key (domain.key):"],["p","openssl req \\\n       -key domain.key \\\n       -new -out domain.csr\nAnswer the CSR information prompt to complete the process."],["p","The -key option specifies an existing private key (domain.key) that will be used to generate a new CSR. The -new option indicates that a CSR is being generated."],["p","Generate a CSR from an Existing Certificate and Private Key\nUse this method if you want to renew an existing certificate but you or your CA do not have the original CSR for some reason. It basically saves you the trouble of re-entering the CSR information, as it extracts that information from the existing certificate."],["p","This command creates a new CSR (domain.csr) based on an existing certificate (domain.crt) and private key (domain.key):"],["p","openssl x509 \\\n       -in domain.crt \\\n       -signkey domain.key \\\n       -x509toreq -out domain.csr\nThe -x509toreq option specifies that you are using an X509 certificate to make a CSR."],["p","Generating SSL Certificates\nIf you would like to use an SSL certificate to secure a service but you do not require a CA-signed certificate, a valid (and free) solution is to sign your own certificates."],["p","A common type of certificate that you can issue yourself is a self-signed certificate. A self-signed certificate is a certificate that is signed with its own private key. Self-signed certificates can be used to encrypt data just as well as CA-signed certificates, but your users will be displayed a warning that says that the certificate is not trusted by their computer or browser. Therefore, self-signed certificates should only be used if you do not need to prove your service\u2019s identity to its users (e.g. non-production or non-public servers)."],["p","This section covers OpenSSL commands that are related to generating self-signed certificates."],["p","Generate a Self-Signed Certificate\nUse this method if you want to use HTTPS (HTTP over TLS) to secure your Apache HTTP or Nginx web server, and you do not require that your certificate is signed by a CA."],["p","This command creates a 2048-bit private key (domain.key) and a self-signed certificate (domain.crt) from scratch:"],["p","openssl req \\\n       -newkey rsa:2048 -nodes -keyout domain.key \\\n       -x509 -days 365 -out domain.crt\nAnswer the CSR information prompt to complete the process."],["p","The -x509 option tells req to create a self-signed cerificate. The -days 365 option specifies that the certificate will be valid for 365 days. A temporary CSR is generated to gather information to associate with the certificate."],["p","Generate a Self-Signed Certificate from an Existing Private Key\nUse this method if you already have a private key that you would like to generate a self-signed certificate with it."],["p","This command creates a self-signed certificate (domain.crt) from an existing private key (domain.key):"],["p","openssl req \\\n       -key domain.key \\\n       -new \\\n       -x509 -days 365 -out domain.crt\nAnswer the CSR information prompt to complete the process."],["p","The -x509 option tells req to create a self-signed cerificate. The -days 365 option specifies that the certificate will be valid for 365 days. The -new option enables the CSR information prompt."],["p","Generate a Self-Signed Certificate from an Existing Private Key and CSR\nUse this method if you already have a private key and CSR, and you want to generate a self-signed certificate with them."],["p","This command creates a self-signed certificate (domain.crt) from an existing private key (domain.key) and (domain.csr):"],["p","openssl x509 \\\n       -signkey domain.key \\\n       -in domain.csr \\\n       -req -days 365 -out domain.crt\nThe -days 365 option specifies that the certificate will be valid for 365 days."],["p","View Certificates\nCertificate and CSR files are encoded in PEM format, which is not readily human-readable."],["p","This section covers OpenSSL commands that will output the actual entries of PEM-encoded files."],["p","View CSR Entries\nThis command allows you to view and verify the contents of a CSR (domain.csr) in plain text:"],["p","openssl req -text -noout -verify -in domain.csr\nView Certificate Entries\nThis command allows you to view the contents of a certificate (domain.crt) in plain text:"],["p","openssl x509 -text -noout -in domain.crt\nVerify a Certificate was Signed by a CA\nUse this command to verify that a certificate (domain.crt) was signed by a specific CA certificate (ca.crt):"],["p","openssl verify -verbose -CAFile ca.crt domain.crt\nPrivate Keys\nThis section covers OpenSSL commands that are specific to creating and verifying private keys."],["p","Create a Private Key\nUse this command to create a password-protected, 2048-bit private key (domain.key):"],["p","openssl genrsa -des3 -out domain.key 2048\nEnter a password when prompted to complete the process."],["p","Verify a Private Key\nUse this command to check that a private key (domain.key) is a valid key:"],["p","openssl rsa -check -in domain.key\nIf your private key is encrypted, you will be prompted for its pass phrase. Upon success, the unencrypted key will be output on the terminal."],["p","Verify a Private Key Matches a Certificate and CSR\nUse these commands to verify if a private key (domain.key) matches a certificate (domain.crt) and CSR (domain.csr):"],["p","openssl rsa -noout -modulus -in domain.key | openssl md5\nopenssl x509 -noout -modulus -in domain.crt | openssl md5\nopenssl req -noout -modulus -in domain.csr | openssl md5\nIf the output of each command is identical there is an extremely high probability that the private key, certificate, and CSR are related."],["p","Encrypt a Private Key\nThis takes an unencrypted private key (unencrypted.key) and outputs an encrypted version of it (encrypted.key):"],["p","openssl rsa -des3 \\\n       -in unencrypted.key \\\n       -out encrypted.key\nEnter your desired pass phrase, to encrypt the private key with."],["p","Decrypt a Private Key\nThis takes an encrypted private key (encrypted.key) and outputs a decrypted version of it (decrypted.key):"],["p","openssl rsa \\\n       -in encrypted.key \\\n       -out decrypted.key\nEnter the pass phrase for the encrypted key when prompted."],["p","Convert Certificate Formats\nAll of the certificates that we have been working with have been X.509 certificates that are ASCII PEM encoded. There are a variety of other certificate encoding and container types; some applications prefer certain formats over others. Also, many of these formats can contain multiple items, such as a private key, certificate, and CA certificate, in a single file."],["p","OpenSSL can be used to convert certificates to and from a large variety of these formats. This section will cover a some of the possible conversions."],["p","Convert PEM to DER\nUse this command if you want to convert a PEM-encoded certificate (domain.crt) to a DER-encoded certificate (domain.der), a binary format:"],["p","openssl x509 \\\n       -in domain.crt \\\n       -outform der -out domain.der\nThe DER format is typically used with Java."],["p","Convert DER to PEM\nUse this command if you want to convert a DER-encoded certificate (domain.der) to a PEM-encoded certificate (domain.crt):"],["p","openssl x509 \\\n       -inform der -in domain.der \\\n       -out domain.crt\nConvert PEM to PKCS7\nUse this command if you want to add PEM certificates (domain.crt and ca-chain.crt) to a PKCS7 file (domain.p7b):"],["p","openssl crl2pkcs7 -nocrl \\\n       -certfile domain.crt \\\n       -certfile ca-chain.crt \\\n       -out domain.p7b\nNote that you can use one or more -certfile options to specify which certificates to add to the PKCS7 file."],["p","PKCS7 files, also known as P7B, are typically used in Java Keystores and Microsoft IIS (Windows). They are ASCII files which can contain certificates and CA certificates."],["p","Convert PKCS7 to PEM\nUse this command if you want to convert a PKCS7 file (domain.p7b) to a PEM file:"],["p","openssl pkcs7 \\\n       -in domain.p7b \\\n       -print_certs -out domain.crt\nNote that if your PKCS7 file has multiple items in it (e.g. a certificate and a CA intermediate certificate), the PEM file that is created will contain all of the items in it."],["p","Convert PEM to PKCS12\nUse this command if you want to take a private key (domain.key) and a certificate (domain.crt), and combine them into a PKCS12 file (domain.pfx):"],["p","openssl pkcs12 \\\n       -inkey domain.key \\\n       -in domain.crt \\\n       -export -out domain.pfx\nYou will be prompted for export passwords, which you may leave blank. Note that you may add a chain of certificates to the PKCS12 file by concatenating the certificates together in a single PEM file (domain.crt) in this case."],["p","PKCS12 files, also known as PFX files, are typically used for importing and exporting certificate chains in Micrsoft IIS (Windows)."],["p","Convert PKCS12 to PEM\nUse this command if you want to convert a PKCS12 file (domain.pfx) and convert it to PEM format (domain.combined.crt):"],["p","openssl pkcs12 \\\n       -in domain.pfx \\\n       -nodes -out domain.combined.crt\nNote that if your PKCS12 file has multiple items in it (e.g. a certificate and private key), the PEM file that is created will contain all of the items in it."],["p","OpenSSL Version\nThe openssl version command can be used to check which version you are running. The version of OpenSSL that you are running, and the options it was compiled with affect the capabilities (and sometimes the command line options) that are available to you."],["p","The following command displays the OpenSSL version that you are running, and all of the options that it was compiled with:"],["p","openssl version -a\nThis guide was written using an OpenSSL binary with the following details (the output of the previous command):"],["p",'OpenSSL 1.0.1f 6 Jan 2014\nbuilt on: Mon Apr  7 21:22:23 UTC 2014\nplatform: debian-amd64\noptions:  bn(64,64) rc4(16x,int) des(idx,cisc,16,int) blowfish(idx)\ncompiler: cc -fPIC -DOPENSSL_PIC -DOPENSSL_THREADS -D_REENTRANT -DDSO_DLFCN -DHAVE_DLFCN_H -m64 -DL_ENDIAN -DTERMIO -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2 -Wl,-Bsymbolic-functions -Wl,-z,relro -Wa,--noexecstack -Wall -DMD32_REG_T=int -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_MONT5 -DOPENSSL_BN_ASM_GF2m -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DMD5_ASM -DAES_ASM -DVPAES_ASM -DBSAES_ASM -DWHIRLPOOL_ASM -DGHASH_ASM\nOPENSSLDIR: "/usr/lib/ssl"\nConclusion\nThat should cover how most people use OpenSSL to deal with SSL certs! It has many other uses that were not covered here, so feel free to ask or suggest other uses in the comments.'],["p","If you are having issues with any of the commands, be sure to comment (and include your OpenSSL version output)."]],meta:{filename:"docs/algorithm/openssl.zh-CN.md"},description:["section",["p","OpenSSL Essentials: Working with SSL Certificates, Private Keys and CSRs\nPostedSeptember 12, 2014 1.2m views SECURITY FAQ\n manicas\nBy Mitchell Anicas"],["p","Become an author"],["p","Introduction\nOpenSSL is a versatile command line tool that can be used for a large variety of tasks related to Public Key Infrastructure (PKI) and HTTPS (HTTP over TLS). This cheat sheet style guide provides a quick reference to OpenSSL commands that are useful in common, everyday scenarios. This includes OpenSSL examples of generating private keys, certificate signing requests, and certificate format conversion. It does not cover all of the uses of OpenSSL."],["p","How to Use This Guide:"],["p","If you are not familiar with certificate signing requests (CSRs), read the first section\nAside from the first section, this guide is in a simple, cheat sheet format\u2013self-contained command line snippets\nJump to any section that is relevant to the task you are trying to complete (Hint: use the Contents menu on the bottom-left or your browser\u2019s Find function)\nMost of the commands are one-liners that have been expanded to multiple lines (using the \\ symbol) for clarity\nAbout Certificate Signing Requests (CSRs)\nIf you would like to obtain an SSL certificate from a certificate authority (CA), you must generate a certificate signing request (CSR). A CSR consists mainly of the public key of a key pair, and some additional information. Both of these components are inserted into the certificate when it is signed."],["p","Whenever you generate a CSR, you will be prompted to provide information regarding the certificate. This information is known as a Distinguised Name (DN). An important field in the DN is the Common Name (CN), which should be the exact Fully Qualified Domain Name (FQDN) of the host that you intend to use the certificate with. It is also possible to skip the interactive prompts when creating a CSR by passing the information via command line or from a file."],["p","The other items in a DN provide additional information about your business or organization. If you are purchasing an SSL certificate from a certificate authority, it is often required that these additional fields, such as \u201cOrganization\u201d, accurately reflect your organization\u2019s details."],["p","Here is an example of what the CSR information prompt will look like:"]],toc:["ul"]}}});