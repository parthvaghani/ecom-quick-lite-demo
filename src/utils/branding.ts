export const logBranding = () => {
  const styles = [
    "color: #e2e8f0",
    "background: #1e293b",
    "font-size: 16px",
    "line-height: 1.8",
    "padding: 20px",
    "border: 2px solid #334155",
    "border-radius: 10px",
    "font-family: monospace",
    "text-align: center",
    "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)",
  ].join(";");

  const message = `┌───────────────────────────────────────────┐
│     Built with 💚💚💚 by Ripplestacks      │
│     https://ripplestacks.com              │
└───────────────────────────────────────────┘`;
  console.log(`%c${message}`, styles);
};
