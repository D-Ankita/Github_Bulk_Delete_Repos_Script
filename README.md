# 🗑️ GitHub Repository Deletion Script

🚀 A Node.js script to **fetch and delete GitHub repositories**, sorted by **last modified date (oldest first)**.  
Perfect for **cleaning up old projects** from your GitHub account.  

---

## 📌 Features
✅ Fetches **all repositories** from your GitHub account  
✅ **Displays last modified date** (YYYY-MM-DD) for easy selection  
✅ **Sorts repositories** by last updated date (**oldest first**)  
✅ **Allows multiple repo selections** for bulk deletion  
✅ **Confirmation step** before deletion to prevent mistakes  
✅ **Securely loads credentials** from a `.env` file  

---

## ⚠️ Prerequisites
Before using this script, make sure you have:  
- **Node.js (v16 or higher)** installed  
- **GitHub Personal Access Token (PAT)** with `repo` and `delete_repo` permissions  

---  

## 🛠️ How to Generate a GitHub Personal Access Token (PAT)  

To authenticate with GitHub, you need a **Personal Access Token (PAT)**:  

1. **Go to GitHub** → [Personal Access Tokens](https://github.com/settings/tokens)  
2. Click on **"Generate new token (classic)"**  
3. Give it a name like `"GitHub Repo Cleaner"`  
4. **Set the expiration** (or choose "No Expiration" if you want to reuse it)  
5. **Select the following permissions**:  
   - ✅ `repo` (Full control of private repositories)
   - ✅ `delete_repo` (Permission to delete repositories)
6. Click **Generate Token**  
7. **Copy the token** (You won’t be able to see it again)  

**⚠️ IMPORTANT:** Keep your token **private**. Never share it or commit it to GitHub.

---

## 📥 Installation

1️⃣ **Clone this repository**  
```
git clone https://github.com/YOUR_GITHUB_USERNAME/github-repo-cleaner.git
cd github-repo-cleaner
```

2️⃣ **Install dependencies**
```
npm install
```

3️⃣ Create a .env file (DO NOT SHARE THIS FILE)
```
cp .env.example .env
```
4️⃣ Edit .env file and replace with your credentials:
```
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
```

## 🚀 Usage
Run the script to **select and delete repositories**.
```
node github_delete_repos.js
```


### **Example Workflow**
1️⃣ **Lists all repositories sorted by last modified date**  
2️⃣ **You select repositories to delete**  
3️⃣ **Confirmation step before deletion**  
4️⃣ **Deletes the selected repositories**  

---

## 📸 Screenshot 
<img width="1110" alt="image" src="https://github.com/user-attachments/assets/b27710a0-170f-454b-82db-dca178103854" />

<img width="1110" alt="image" src="https://github.com/user-attachments/assets/4b62a734-cceb-4f8d-977a-428ac8d132c8" />

<img width="1105" alt="image" src="https://github.com/user-attachments/assets/cab96fc4-767d-426f-9310-a1503a1d018e" />

<img width="1110" alt="image" src="https://github.com/user-attachments/assets/38d3b03e-40b7-4964-a8c2-5afbf677e81f" />

---

## 🛠️ Development & Contributions
👨‍💻 **Want to improve this script?** Feel free to **fork this repo and submit a PR**!  
**To-do list:**  
- ✅ Fetch **more than 100 repositories** (pagination support)  
- ✅ Add **filters** (e.g., delete only forks, archived repos, or old repos)  
- 🔄 Implement **batch deletion** (instead of deleting one by one)  

---

## 🛠️ Project Folder Structure
To help you navigate, here's the project folder structure:

```
📁 github-repo-cleaner  
 ├── github_delete_repos.js        # Main script file  
 ├── .env.example                  # Example .env file (DO NOT COMMIT actual .env)  
 ├── package.json                  # Dependencies & metadata  
 ├── package-lock.json             # Locks dependency versions  
 ├── README.md                     # Documentation  
 ├── .gitignore                    # To prevent sensitive files from being uploaded  
```

---

## ❗❗  Disclaimer  ❗❗
This script **permanently deletes repositories**. **Use with caution!**  
Make sure to **double-check your selections before confirming deletion**.  

---

## 🏷️ License
MIT License - Feel free to modify & use! 😊

---

💡 **Created by [D-Ankita]**  
🌟 **Give a ⭐ on GitHub if you find this useful!**


