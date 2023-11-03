import { useState } from 'react';

// Example on how to avoid prop drilling via App composition
const MainComponent = () => {
  const [user, setUser] = useState();
  const [avatarSize, setAvatarSize] = useState();

  return (
    <Page>
      <PageLayout>
        <NavigationBar>
          <Link href={user.permalink}>
            <Avatar user={user} size={avatarSize} />
          </Link>
        </NavigationBar>
      </PageLayout>
    </Page>
  );
};

const Page = ({ children }) => {
  return children;
};

const PageLayout = ({ children }) => {
  return children;
};

const NavigationBar = ({ children }) => {
  return children;
};
