import RouteNames from "./RouteNames";
import FingerprintLineIcon from "remixicon-react/FingerprintLineIcon";
import PieChart2LineIcon from "remixicon-react/PieChart2LineIcon";
import KeyLineIcon from "remixicon-react/KeyLineIcon";

type HeaderStyleType = { mainNavDesktop: string; mainNavMobile: string; logo: string; };

type HeaderNavigationStyleType = Record<string, HeaderStyleType>;

export const notFoundHeaderStyleProps: HeaderStyleType = {
    mainNavDesktop: '#273A6B',
    mainNavMobile: '#273A6B',
    logo: '#273A6B'
};

export const headerRouteProps: HeaderNavigationStyleType = {
    [RouteNames.landing]:
        {mainNavDesktop: '#ffffff', mainNavMobile: '#273A6B', logo: '#273A6B'},
    [RouteNames.research]:
        {mainNavDesktop: '#ffffff', mainNavMobile: '#273A6B', logo: '#273A6B'},
    [RouteNames.developer]:
        {mainNavDesktop: '#ffffff', mainNavMobile: '#273A6B', logo: '#273A6B'},
    [RouteNames.about]:
        {mainNavDesktop: '#ffffff', mainNavMobile: '#273A6B', logo: '#273A6B'},
    [RouteNames.panel]:
        {mainNavDesktop: '#ffffff', mainNavMobile: '#273A6B', logo: '#273A6B'},
}

export const headerNavigationRoutes = [
    {name: 'About', link: RouteNames.about, icon: FingerprintLineIcon},
    {name: 'Research', link: RouteNames.research, icon: PieChart2LineIcon},
    {name: 'Developers', link: RouteNames.developer, icon: KeyLineIcon},
]
