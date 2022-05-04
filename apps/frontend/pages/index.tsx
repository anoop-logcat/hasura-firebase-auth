import { useAuth } from "../providers/AuthProvider";

export function Index() {
  const { currentUser,logout } = useAuth()

  return (
    <div>
      {JSON.stringify(currentUser)}
      <button onClick={async () => {
        await logout();
      }}>Sign Out</button>
    </div>
  );
}

export default Index;
