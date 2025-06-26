// Global styles for the application
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Use brand colors for hover effects */
      a {
        text-decoration: none;
        color: #ba9765; /* brand-gold */
      }
      a:hover {
        color: #ba9765 !important; /* brand-gold */
      }

      button:hover {
        color: #ba9765; /* brand-gold */
      }

      .hover-text:hover {
        color: #ba9765 !important; /* brand-gold */
      }
    `}</style>
  );
};

export default GlobalStyles; 