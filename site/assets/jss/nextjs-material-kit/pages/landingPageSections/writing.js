import { title } from "assets/jss/nextjs-material-kit.js";

const writing = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    color: '#9a9a9a',
    fontSize: '2.5em',
    fontWeight: '700',
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textShadow: '2px 3px 3px black',
    "@media (max-width: 500px)": {
      textShadow: 'none',
      color: '#010103',
    },
  },
  description: {
    fontFamily: 'EB Garamond, serif',
    fontSize: '1.3em',
    textAlign: 'left',
    color: "#010103 !important",
    marginBottom: "3rem",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(7px)',
    "@media (max-width: 500px)": {
      fontSize: '1.1em',
    },
  },
  
  button: {
    marginTop: "20px",
  }
};

export default writing;