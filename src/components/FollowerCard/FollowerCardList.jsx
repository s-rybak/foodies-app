import FollowerCard from "./FollowerCard.jsx";
import styles from "./FollowerCard.module.css";

const FollowerCardList = () => {
  const data = [
    {
      _id: 1,
      name: "John Doe",
      avatarURL: "https://picsum.photos/200/300",
      isFollowing: true,
      totalRecipes: 5,
      recipes: [
        {
          _id: "r1",
          title: "Spaghetti Carbonara",
          thumb: "https://picsum.photos/200/300",
        },
        {
          _id: "r2",
          title: "Chicken Alfredo",
          thumb: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      _id: 2,
      name: "Jane Smith",
      avatarURL: "https://picsum.photos/200/300",
      isFollowing: false,
      totalRecipes: 2,
      recipes: [
        {
          _id: "r3",
          title: "Beef Wellington",
          thumb: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      _id: 3,
      name: "Alice Johnson",
      avatarURL: null, // No avatar provided
      isFollowing: true,
      totalRecipes: 8,
      recipes: [
        {
          _id: "r4",
          title: "Pancakes",
          thumb: "https://picsum.photos/200/300",
        },
        {
          _id: "r5",
          title: "Avocado Toast",
          thumb: "https://picsum.photos/200/300",
        },
        {
          _id: "r6",
          title: "Smoothie Bowl",
          thumb: "https://picsum.photos/200/300",
        },
      ],
    },
  ];

  return (
    <ul className={styles.followerCardList}>
      {data.map((el) => (
        <FollowerCard
          key={el._id}
          data={el}
          tab={"followers"}
          handleFollowUser={(id) => console.log(`Follow user with ID: ${id}`)}
          handleUnfollowUser={(id) => console.log(`Unfollow user with ID: ${id}`)}
        />
      ))}
    </ul>
  );
};

export default FollowerCardList;
