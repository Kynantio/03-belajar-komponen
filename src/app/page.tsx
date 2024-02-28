import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Ilmuwan yang Luar Biasa</h1>
        <hr />
        <Gallery />
        <hr />
        <TodoList />
      </div>
    </main>
  );
}