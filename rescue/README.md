#Twitter : @Crypto0xDev 
#Gmail : crypto0xdev@gmail.com
#youtube : https://www.youtube.com/channel/UCBPjByW2VRZV3g3E9fRgGwQ

----------------------------------------------------------------------

What you need to do step by step :
1) download the files and unzip into a folder called rescue on your desktop
2) go to google and search for download Node js , download it and install it .
3) use Vscode software , drag the folder inside Vscode
4) in vscode menu look for terminal > open new terminal .
5) in terminal make sure you are in the folder rescue , type "ls" and enter key , you should see other folders and files , if so type "npm i" wait for the modules to be downloaded .
6) edit the file index.js , Global_modules.js and .env  to your needs , in index.js you can manipulate the Gas needed to make your Tx go first before the sweeper bot , in Global_modules.js you will need to replace that base64 code with yours where you incode the smart contract ABI of the token you are trying to rescue into base64 and paste it there and finally in the .env file you need to setup your sender address : hacked wallet / reciver address : safe wallet where you want the tokens to be sent , token contract : smart contract address , network put the ticker of the network i.e : on ethereum put : ETH , on fantom put FTM , on binance network put BNB etc .., and private keys of the compromised wallet , and so on ..
7) go back to the terminal in vs code , type "node index.js" the bot will run , it will keep on looping and waiting for Gas , you need to send some native tokens to that wallet and observe , sometimes you might need to send just a bit extra but in chunks so when the sweeper bot is busy the rescue bot transfers out your stuck tokens !

Ps : if you need further help do not hesitate to reach out to me , for folks that need help with stuck tokens worht less than $1000 i will help you out for free .. for folks with with stuck amount $1000+ i would charge a $50 fixed fare upon successful retreival of your tokens , if we failed then i won't charge you ..
good luck !
