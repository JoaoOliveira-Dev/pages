import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  WriteUpLayout,
  TerminalBlock,
  LinkButton,
  ExternalLink,
  Title,
} from "../../components/WriteUpComponents";

const HashcatCrash = () => {
  return (
    <WriteUpLayout
      title="Crack the hash"
      platform="TryHackMe"
      difficulty="Easy"
      date="19 Dec 2025"
    >
      <Link
        to="/"
        className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 no-underline font-mono text-sm"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to list
      </Link>

      {/* ... Todo o conteúdo do Write-up que fizemos antes ... */}
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        1. The problem
      </h2>
      <p>
        In this challenge, we need to crack some hashes and I will teach you
        some ways to break them.
      </p>
      <br />
      <p>First, let's list the hashes from the first challenge. </p>

      <TerminalBlock
        command="cat hashes.txt"
        output={`Hash: 48bb6e862e54f2a795ffc4e541caed4d
Hash: CBFDAC6008F9CAB4083784CBD1874F76618D2A97 
Hash: 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032
Hash: $2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom
Hash: 279412f945939ba78ce0758d3fd83daa`}
      />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        2. Identify the hash type
      </h2>
      <p>
        To identify the type of hash, we can use websites like{" "}
        <ExternalLink to="https://hashes.com/en/tools/hash_identifier">
          hashes.com
        </ExternalLink>{" "}
        that can be used to this.
      </p>

      <img
        src="crackhash1.png"
        alt="Hash Identifier"
        className="my-6 rounded-lg border border-gray-700"
      />
      <img
        src="crackhash2.png"
        alt="Hash Types"
        className="my-6 rounded-lg border border-gray-700"
      />

      <p>From the image above, we can see the possible types for each hash.</p>

      <TerminalBlock
        command="cat type_hashes.txt"
        output={`Hash: 48bb6e862e54f2a795ffc4e541caed4d - Possible algorithms: MD5
Hash: CBFDAC6008F9CAB4083784CBD1874F76618D2A97 - Possible algorithms: SHA1
Hash: 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032 - Possible algorithms: SHA256
Hash: $2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom - Possible algorithms: bcrypt $2*$, Blowfish (Unix)
Hash: 279412f945939ba78ce0758d3fd83daa - Possible algorithms: MD4`}
      />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        2.1 Tools to identify hash types
      </h2>
      <p>
        Another tool that can be used to identify hash types is hash-identifier
      </p>

      <TerminalBlock
        command="hash-identifier"
        output={String.raw`
#########################################################################
#     __  __                     __           ______    _____           #
#    /\ \/\ \                   /\ \         /\__  _\  /\  _ \         #
#    \ \ \_\ \     __      ____ \ \ \___     \/_/\ \/  \ \ \/\ \        #
#     \ \  _  \  /'__\`   / ,__\ \ \  _ \`      \ \ \   \ \ \ \ \       #
#      \ \ \ \ \/\ \_\ \_/\__, \` \ \ \ \ \      \_\ \__ \ \ \_\ \      #
#       \ \_\ \_\ \___ \_\/\____/  \ \_\ \_\     /\_____\ \ \____/      #
#        \/_/\/_/\/__/\/_/\/___/    \/_/\/_/     \/_____/  \/___/  v1.2 #
#########################################################################
--------------------------------------------------
 HASH: 48bb6e862e54f2a795ffc4e541caed4d

Possible Hashs:
[+] MD5

`}
      />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        2.2 Installing Hashcat
      </h2>
      <p>
        Hashcat can be installed on most Linux distributions using the package
        manager:
      </p>
      <TerminalBlock
        command="sudo apt install hashcat"
        output={String.raw`
hashcat is already the newest version (6.2.6+dfsg-1ubuntu1).
`}
      />

      <Title>3. Cracking the hashes</Title>
      <p>
        Now that we have identified the hash types and installed Hashcat, we can
        proceed to crack the hashes. We will use a wordlist to perform a
        dictionary attack.
      </p>
      <p>
        To use hashcat, we need to specify the hash type using a specific code.
        Here are the codes for the identified hash types:
      </p>

      <TerminalBlock
        command="cat hashcat_codes.txt"
        output={`MD5: 0
SHA1: 100
SHA256: 1400
bcrypt $2*$, Blowfish (Unix): 3200
MD4: 900`}
      />
      <p>
        Now, we can run hashcat for each hash type using the appropriate code
        and a wordlist (e.g., rockyou.txt):
      </p>
      <TerminalBlock
        command="hashcat -m [hash_type_code] -a 0 hashes.txt /usr/share/wordlists/rockyou.txt"
        output={String.raw`
48bb6e862e54f2a795ffc4e541caed4d:[FLAG1]
CBFDAC6008F9CAB4083784CBD1874F76618D2A97:[FLAG2]
1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032:[FLAG3]
$2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom:[FLAG4]
279412f945939ba78ce0758d3fd83daa:[FLAG5]
`}
      />

      <Title>3.1 Another way to crack hashes</Title>
      <p>
        Another away to crack hashes is by using online tools like {" "}
        <ExternalLink to="https://crackstation.net/">
          CrackStation
        </ExternalLink>
        {" "}or{" "}
        <ExternalLink to="https://hashes.com/en/decrypt/hash">
          Hashes
        </ExternalLink>
        . You can simply paste the hash and it will try to crack it using its
        database.
      </p>

      <img
        src="crackhash3.png"
        alt="Hashes Cracked Online"
        className="my-6 rounded-lg border border-gray-700"
      />

      <img
        src="crackhash4.png"
        alt="Hashes Identify and Cracked Online"
        className="my-6 rounded-lg border border-gray-700"
      />

      <Title>4. Next Level</Title>
      <p>
        For the next level, we have more complex hashes to crack. Let's take a
        look at one of them:
      </p>
      <TerminalBlock
        command="cat complex_hash.txt"
        output={String.raw`Hash: F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85
Hash: 1DFECA0C002AE40B8619ECF94819CC1B
Hash: $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02.
Hash: e5d8870e5bdd26602cab8dbe07a942c8669e56d6
`}
      />
      <p>
        We can use the same approach as before, identifying the hash types and
        using hashcat to crack them.
      </p><br/>

      <p>
        For the next level, i will let you explore and try to crack these hashes
        on your own.
      </p>
      <p>
        Remember to always use a good wordlist and consider using rules to
        enhance your cracking attempts.
      </p>
      <br/>
      <p>
        Good luck and happy cracking!
      </p>
    </WriteUpLayout>
  );
};

export default HashcatCrash;
