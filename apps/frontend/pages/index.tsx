import { useAuth } from "../providers/AuthProvider";

export function Index() {
  const { currentUser } = useAuth()

  return (
    <div>
      {JSON.stringify(currentUser)}
    </div>
  );
}

export default Index;
