import { BiCheck, BiCheckDouble } from "react-icons/bi";

export const getStatusIcon = (status) => {
  let statusIcon;

  switch (status) {
    case 'delivered':
      statusIcon = <BiCheckDouble size={22} color="#888" />;
      break;

    case 'read':
      statusIcon = <BiCheckDouble size={22} color="#25D366" />;
      break;

    default:
      statusIcon = <BiCheck size={22} color="#888" />;
      break;
  }

  return statusIcon;
};
