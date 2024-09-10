import { Container, Title, UnderTitle } from "components/UI";
import style from "./ProfileInfoPage.module.css";
import ProfileHead from "../ProfileHead/ProfileHead";
import ProfileTabs from "../ProfileTabs/ProfileTabs";

export default function ProfileInfoPage({ userInfo, profileHeadButton }) {
  return (
    <section className={style["profile-info"]}>
      <Container>
        <Title>Profile</Title>
        <UnderTitle maxWidth={445}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </UnderTitle>
        <div className={style["profile-content"]}>
          <ProfileHead userInfo={userInfo} button={profileHeadButton} />
          <ProfileTabs />
        </div>
      </Container>
    </section>
  );
}
