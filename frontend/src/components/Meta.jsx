import { Helmet } from "react-helmet-async";
import Icon from "../../favicon.png";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <link rel="icon" type="image/x-icon" href={Icon} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Honest Piranha. Home of SNEScapades!",
  description:
    "Home of the SNEScapades podcast. A chronological journey through the North American Super Nintendo Library.",
  keywords: "super nes, video game history, snes, retro gaming podcast",
};

export default Meta;
