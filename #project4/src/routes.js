import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import ShowPage from "./components/ShowPage";

const routes = [
  { path: "/", component: <HomePage /> },
  { path: "/blogs", component: <ListPage /> },
  { path: "/blogs/create", component: <CreatePage /> },
  { path: "/blogs/:id/edit", component: <EditPage /> },
  { path: "/blogs/:id", component: <ShowPage /> },
];

export default routes;
