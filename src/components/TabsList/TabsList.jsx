import React, { useState } from 'react';
import styles from './TabsList.module.css';

const TabsList = ({ isOwnProfile, onTabChange }) => {
  const ownProfileTabs = [
    { id: 'my-recipes', label: 'My Recipes' },
    { id: 'my-favorites', label: 'My Favorites' },
    { id: 'followers', label: 'Followers' },
    { id: 'following', label: 'Following' },
  ];
  const otherProfileTabs = [
    { id: 'recipes', label: 'Recipes' },
    { id: 'followers', label: 'Followers' },
  ];

  const [activeTab, setActiveTab] = useState(
    isOwnProfile ? 'my-recipes' : 'recipes'
  );

  const handleTabClick = tabId => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  const tabs = isOwnProfile ? ownProfileTabs : otherProfileTabs;

  return (
    <div className={styles.tabListWrapper}>
      <ul className={styles.tabsList}>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`${styles.tabItem} ${
              tab.id === activeTab ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsList;
