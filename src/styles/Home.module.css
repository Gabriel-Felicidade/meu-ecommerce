.page {
  --background: #fdf6ec;
  --foreground: #ffffff;

  --text-primary: #3e2723;
  --text-secondary: #6d4c41;

  --button-primary: #6f4e37;
  --button-primary-hover: #5d4037;

  --button-secondary-border: #d7ccc8;
  --button-secondary-hover: #efebe9;

  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: var(--font-geist-sans);
  background-color: var(--background);
}

.main {
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--foreground);
  padding: 100px 60px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1000px;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.intro h1 {
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--text-primary);
}

.intro p {
  max-width: 500px;
  font-size: 18px;
  line-height: 30px;
  color: var(--text-secondary);
}

.ctas {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.ctas a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0 24px;
  border-radius: 50px;
  font-weight: 600;
  transition: 0.3s ease;
}

a.primary {
  background: var(--button-primary);
  color: #fff;
}

a.secondary {
  border: 1px solid var(--button-secondary-border);
  color: var(--text-primary);
}

@media (hover: hover) and (pointer: fine) {
  a.primary:hover {
    background: var(--button-primary-hover);
  }

  a.secondary:hover {
    background: var(--button-secondary-hover);
  }
}

@media (max-width: 600px) {
  .main {
    padding: 60px 24px;
  }

  .intro h1 {
    font-size: 32px;
  }
}

/* Dark mode cafeteria */
@media (prefers-color-scheme: dark) {
  .page {
    --background: #1b1b1b;
    --foreground: #2c2c2c;

    --text-primary: #f5f5f5;
    --text-secondary: #bbbbbb;

    --button-primary: #c8a27c;
    --button-primary-hover: #b08968;

    --button-secondary-border: #444;
    --button-secondary-hover: #333;
  }
}