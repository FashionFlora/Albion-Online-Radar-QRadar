## ✨ Join Discord
- Link: https://discord.gg/rKKVqUdP3p

---

## ❓ What is QRadar?
Albion QRadar provide a real-time map, aiding players in detecting other players, creatures, and resources nearby.

---
## ❓ If you want to use in game items

- Link: https://www.mediafire.com/file/fa96b300q7ompjb/Items.rar/file

### Video Tutorial
### Link: https://www.youtube.com/watch?v=_luNHJXrD5o

---
## ❓ Usage (Windows)

1. Download Node.js v18.18.2:
- [Node.js v18.18.2 (64-bit)](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi)
2. Download Npcap:
- [Npcap 1.72](https://npcap.com/dist/npcap-1.72.exe)
3. Download Python 3.10.2:
- [Python 3.10.2 (64-bit)](https://www.python.org/ftp/python/3.10.2/python-3.10.2-amd64.exe)
4. Install Windows Build Tools:
```
npm install --global windows-build-tools
```
5. Install Node.js packages:
```
npm install
```
6. Run the application:
```
node app.js
```
---
## ❓ How to Open Radar on Your Smartphone 
1. Connect your device to the same network as your PC
- You need to connect your Smartphone or Laptop to the same wifi/lan as your PC.
2. Check your IPv4 Adress
```
ipconfig
```
3. See the correct internet adapter that you use:
- Go to Control Panel > Network and sharing center > Choose same as access type connection
4. Go and type on your browser with this format
```
your_ip_connection_here:5001 ex: 192.168.19.5:5001
```
5. Run the adress
- Now you can press enter and run the correct adress and see the radar on difrent device on same network
---
## ❓ Usage (Linux)

1. Switch to root user:
```
sudo su
```
2. Install Node Version Manager (NVM):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
3. Close the terminal.
4. Install Node.js version 18:
```
nvm install 18
nvm use 18
```
5. Install required libraries:
```
sudo apt-get install libpcap0.8 libpcap0.8-dev
```
6. Install Python 3.10:
```
sudo apt install python3.10
```
7. Install build essentials:
```
sudo apt-get install build-essential
```
8. Install Node.js dependencies:
```
npm install
```
9. Navigate to the project directory and run the application:
```
node app.js
```
10. Open http://localhost:5001 in your browser.
---
Utilized the parser from https://github.com/0xN0x/photon-packet-parser for efficient packet parsing.
---
