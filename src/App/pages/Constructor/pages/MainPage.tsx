import {
    EuiHeader,
    EuiHeaderBreadcrumbs,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiHeaderSectionItemButton,
    EuiHeaderLogo,
    EuiIcon,
} from '@elastic/eui';

import HelpPage from "@/App/pages/Constructor/pages/HelpPage";
import RulesPage from "@/App/pages/Constructor/pages/RulesPage";
import DecodersPage from "@/App/pages/Constructor/pages/DecodersPage";
const MainPage = () => {
    const renderLogo = () => {
        return (
            <EuiHeaderLogo href="#">Wazuh</EuiHeaderLogo>
        );
    };

    const renderBreadcrumbs = () => {
        const breadcrumbs = [
            {
                text: 'Управление',
                href: '#',
                className: 'customClass',
            },
            {
                text: 'Конструктор декодеров',
                href: '#',
            },
        ];

        return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
    }

    const renderSearch = () => {
        return (
            <EuiHeaderSectionItemButton aria-label="Search">
                <EuiIcon type="search" size="m" />
            </EuiHeaderSectionItemButton>
        );
    }

    return (
        <>
            <EuiHeader>
                <EuiHeaderSection grow={false}>
                    <EuiHeaderSectionItem border="right">
                        {renderLogo()}
                    </EuiHeaderSectionItem>
                </EuiHeaderSection>

                {renderBreadcrumbs()}

                <EuiHeaderSection side="right">
                    <EuiHeaderSectionItem>{renderSearch()}</EuiHeaderSectionItem>
                </EuiHeaderSection>
            </EuiHeader>
            <DecodersPage />
        </>
    )
};

export default MainPage;
