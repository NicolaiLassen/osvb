import RouteNames from "./RouteNames";
import FingerprintLineIcon from "remixicon-react/FingerprintLineIcon";
import PieChart2LineIcon from "remixicon-react/PieChart2LineIcon";
import KeyLineIcon from "remixicon-react/KeyLineIcon";

type HeaderStyleType = {
    containerProps?: Record<any, any>;
    mainNavDesktop: string;
    mainNavMobile: string;
    logo: string;
};

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
        {
            containerProps: {
                style: {
                    position: 'relative',
                    background: '#273A6B',
                    boxShadow: '0px 8px 30px rgb(112 144 176 / 15%)',
                }
            },
            mainNavDesktop: '#ffffff',
            mainNavMobile: '#ffffff',
            logo: '#ffffff'
        },
}

export const headerNavigationRoutes = [
    {name: 'Projektet', link: RouteNames.about, icon: FingerprintLineIcon},
    {name: 'Forskning', link: RouteNames.research, icon: PieChart2LineIcon},
    {name: 'Udvikler', link: RouteNames.developer, icon: KeyLineIcon},
]
