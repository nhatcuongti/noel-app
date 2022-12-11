import Home from "../layout/home/home";
import ReceiveGift from "../layout/receive-gift/receive-gift";
import MyWish from "../layout/my-wish/my-wish";

const publicRoutes = [
    { path: '/home', element: Home},
    { path: '/receive-gift', element: ReceiveGift},
    { path: '/my-wish', element: MyWish },
];

export {publicRoutes}