import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import FormSplitBill from "./FormSplitBill";

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </aside>
      <main>
        <FormSplitBill />
      </main>
    </div>
  );
}
