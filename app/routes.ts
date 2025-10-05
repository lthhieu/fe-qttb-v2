import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("components/layouts/master.tsx", [
        ...prefix("", [
            index("routes/post.tsx"),
            route(":postId", "routes/post.detail.tsx")
        ]),
        route("gioi-thieu", "routes/home.tsx"),
        route("chuc-nang-nhiem-vu", "routes/mission.tsx"),
        route("van-ban-quy-dinh", "routes/word.tsx"),
        route("bieu-mau", "routes/form.tsx"),
        route("quy-trinh", "routes/process.tsx"),

    ]),
    // route("dang-nhap", "routes/login.tsx"),
] satisfies RouteConfig;
