// Global styles for the application
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Change any hover effects to blue */
      a {
        text-decoration: none;
        color: #0066CC;
      }
      a:hover {
        color: #0066CC !important;
      }

      button:hover {
        color: #0066CC;
      }

      .hover-text:hover {
        color: #0066CC !important;
      }
    `}</style>
  );
};

export default GlobalStyles; 