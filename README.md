# Modern React Portfolio

A professional, responsive, and interactive personal portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/preview.png)

## 🚀 Features

-   **Custom Space Animation**: Interactive 3D starfield with floating geometric shapes (Three.js).
-   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop.
-   **Dark Theme**: Modern dark aesthetic with cyan/teal accents.
-   **Interactive Elements**: Typewriter text effect, smooth scrolling, and hover animations.
-   **Performance Optimized**: Fast loading speeds and optimized assets.
-   **SEO Friendly**: Includes meta tags and semantic HTML structure.

## 🛠️ Tech Stack

-   **React 19**: Modern UI library.
-   **TypeScript**: Type safety and better developer experience.
-   **Tailwind CSS v4**: Utility-first CSS framework for styling.
-   **Three.js**: 3D graphics library for the space background.
-   **Vite**: Next-generation frontend tooling.

## 📝 Customization

You can easily customize this portfolio with your own information.

1.  **Open `src/data/portfolio.ts`**: This file contains all the data for the website.
2.  **Update Personal Info**: Change the `personalInfo` object with your name, title, email, etc.
3.  **Update Skills**: Modify the `skillCategories` array to list your own skills.
4.  **Add Projects**: Update the `projects` array with your own work.
5.  **Update Experience & Education**: Edit the `experiences` and `education` arrays.
6.  **Resume**: Replace `public/resume.pdf` with your actual resume file.

## 📦 Installation & Local Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🚀 Deployment

This project is ready to be deployed on platforms like Vercel or Netlify.

### Vercel (Recommended)

1.  Create a [Vercel account](https://vercel.com/).
2.  Install Vercel CLI: `npm i -g vercel`
3.  Run `vercel` in the project root.
4.  Follow the prompts to deploy.

**OR**

1.  Push your code to a GitHub repository.
2.  Go to the Vercel dashboard and click "Add New Project".
3.  Import your GitHub repository.
4.  Click "Deploy". Vercel will automatically detect Vite settings.

### Netlify

1.  Create a [Netlify account](https://www.netlify.com/).
2.  Drag and drop the `dist` folder (created after running `npm run build`) to the Netlify dashboard.

**OR**

1.  Push your code to GitHub.
2.  "New Site from Git" in Netlify dashboard.
3.  Connect your repository.
4.  Build command: `npm run build`
5.  Publish directory: `dist`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
