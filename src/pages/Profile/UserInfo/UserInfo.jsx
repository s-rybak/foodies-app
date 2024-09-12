import PathInfo from "components/PathInfo";
import UserInfo from "components/Profile/UserInfo/UserInfo";
import { Container, Title, UnderTitle } from "components/UI";

export default function ProfileInfo() {
  const userInfo = {
    id: 1,
    avatar: "user_1",
    dataList: [
      {
        name: "Email:",
        value: "nadia28682@gmai.com",
      },
      {
        name: "Added recipes:",
        value: 4,
      },
      {
        name: "Followers:",
        value: 5,
      },
    ],
  };

  const profileHeadButton = {
    name: "Follow",
    link: "/",
  };

  return (
    <Container>
      <PathInfo currentPage="Profile" />
      <Title>Profile</Title>
      <UnderTitle maxWidth={442}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </UnderTitle>
      <UserInfo userInfo={userInfo} profileHeadButton={profileHeadButton} />
    </Container>
  );
}