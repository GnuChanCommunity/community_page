
# 🌐 GnuChan Community Website

GnuChan Community is an **Angular-based website** developed to easily manage the promotion of open-source projects, calls for contributions, and community donations. It has **multilingual support**, including both **Turkish** and **English**.

---

## 📑 Table of Contents
- [✨ Features](#-features)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [💻 Technologies Used](#-technologies-used)
- [🌍 Multilingual and Data Provisioning](#-multilingual-and-data-provisioning)
- [🤝 Sponsorship Management](#-sponsorship-management)
- [🛠️ Contributing](#%EF%B8%8F-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features
- **Open Source Promotion**: Detailed presentations of open-source projects to the community.
- **Multilingual Interface**: Dynamic language switching via a custom data-provider infrastructure.
- **Angular Material**: Modern and responsive UI components.
- **Sponsorship Levels**: Prioritization of projects based on donation amounts.
- **Simple Deployment**: Code is deployed directly via Git.

---

## 📂 Project Structure

```plaintext
app
├── container
├── data-provider
│   ├── models          # Interface definitions
│   └── providers       # Language and data provider implementations using Factory method
├── footer
├── header
└── page-contents
    ├── about-us
    ├── contact
    ├── contributors
    ├── home
    ├── project-page
    └── projects
```

### Highlights:
- `data-provider/models`: Contains **TypeScript interfaces** for data models in the project.
- `data-provider/providers`: Multilingual and data provider classes using the **Factory method**.
- `container`, `header`, `footer`: Main layout components.
- `page-contents`: Different page contents for the website.

---

## ⚙️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GnuChanCommunity/community_page.git
   cd community_page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```

4. Navigate to: [http://localhost:4200](http://localhost:4200)

---

## 💻 Technologies Used
- **Angular (v19+)**
- **TypeScript**
- **Angular Material**
- **CSS** (Designed with plain CSS instead of SCSS)
- **Custom Data-Provider**: A structure that provides multilingual and content data.

---

## 🌍 Multilingual and Data Provisioning

The project provides both **multilingual** and **content data** through the `data-provider` layer. The software architecture works as follows:

1. **Data types** are defined via interfaces in the `models` folder.
2. **Language and content provider classes** are located in the `providers`.
3. The desired language and data source are selected at runtime using the **Factory method**.

### 🛠️ Adding a New Language or Changing a Data Source:
1. Add the necessary **interface** in the `models` folder.
2. Create the relevant **provider class** in `providers`.
3. Register the new option with the **Factory method**.

---

## 🤝 Sponsorship Management

Community donations are managed **manually**. Filtering and prioritization within the project list are done according to sponsorship levels:

| **Level** | **Donation Range (USD)** |
|-----------|---------------------------|
| 🥉 Bronze | 0–499                     |
| 🥈 Silver | 500–1,999                 |
| 🥇 Gold   | 2,000+                    |

Donation information is stored in the `donations.json` file and is deployed via Git with each update.

---

## 🛠️ Contributing

We welcome contributions! To contribute:

1. **Fork the project**.
2. **Create a new branch** (e.g., `feature/feature-name`).
3. **Commit and push your changes**.
4. **Open a pull request**.

Please specify your changes and include test scenarios in the PR description.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

## 📬 Contact

For questions or suggestions, feel free to reach out:

- 📧 **Email**: [gnuchancommunity@proton.me](mailto:gnuchancommunity@proton.me)
- 🌐 **Project Page**: [https://github.com/GnuChanCommunity/community_page](https://github.com/GnuChanCommunity/community_page)

---

> *In light of the experience gained from my past projects (Sanayimatik, HTMLUnit Monitor), I believe this platform will add value to the community.*

```

This improved version includes:
1. **Icons** for headers for improved readability.
2. **Code blocks** for commands and project structure.
3. **Tables** for sponsorship levels.
4. **Hyperlinks** for easy navigation.
5. **Proper Markdown formatting** to ensure compatibility with GitHub.

Let me know if you'd like to modify anything further!
