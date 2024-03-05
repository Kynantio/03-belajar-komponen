import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofile";
import MyProfileV2 from "@/components/myprofilev2";
import Card from '@/components/card';

export default function Home() {
  return (
    <main>
      <div>
      <Card>
          <MyProfileV2 />
        </Card>
        <Card>
          <Gallery />
        </Card>
        <Card>
          <TodoList />
        </Card>
        <Card>
          <MyGallery />
        </Card>
        <Card>
          <MyProfile />
        </Card>
      </div>
    </main>
  );
}