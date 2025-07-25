const landingPage = require('./landingPage.graphql');
const page = require('./page.graphql');
const healthCareRegionPage = require('./healthCareRegionPage.graphql');
const vbaFacility = require('./vbaFacility.graphql');

const alertsQuery = require('./alerts.graphql');
const allSideNavMachineNamesQuery = require('./navigation-fragments/allSideNavMachineNames.nav.graphql');
const bannerAlertsQuery = require('./bannerAlerts.graphql');
const bannersQuery = require('./banners.graphql');
const basicLandingPage = require('./nodeBasicLandingPage.graphql');
const benefitListingPage = require('./benefitListingPage.graphql');
const bioPage = require('./bioPage.graphql');
const checklistPage = require('./nodeChecklist.graphql');
const nodeEventListing = require('./nodeEventListing.graphql');
const nodeEvent = require('./nodeEvent.graphql');
const facilitySidebarQuery = require('./navigation-fragments/facilitySidebar.nav.graphql');
const faqMultipleQaPage = require('./faqMultipleQa.graphql');
const healthCareLocalFacilityPage = require('./healthCareLocalFacilityPage.graphql');
const healthCareRegionDetailPage = require('./healthCareRegionDetailPage.graphql');
const healthServicesListingPage = require('./healthServicesListingPage.graphql');
const homePageQuery = require('./homePage.graphql');
const icsFileQuery = require('./file-fragments/ics.file.graphql');
const leadershipListingPage = require('./leadershipListingPage.graphql');
const locationListingPage = require('./locationsListingPage.graphql');
const mediaListImages = require('./nodeMediaListImages.graphql');
const mediaListVideos = require('./nodeMediaListVideos.graphql');
const menuLinksQuery = require('./navigation-fragments/menuLinks.nav.graphql');
const newsStoryPage = require('./newStoryPage.graphql');
const nodeCampaignLandingPage = require('./nodeCampaignLandingPage.graphql');
const outreachAssetsQuery = require('./file-fragments/outreachAssets.graphql');
const outreachSidebarQuery = require('./navigation-fragments/outreachSidebar.nav.graphql');
const pressReleasePage = require('./pressReleasePage.graphql');
const pressReleasesListingPage = require('./pressReleasesListingPage.graphql');
const promoBannersQuery = require('./promoBanners.graphql');
const qaPage = require('./nodeQa.graphql');
const sidebarQuery = require('./navigation-fragments/sidebar.nav.graphql');
const stepByStepPage = require('./nodeStepByStep.graphql');
const storyListingPage = require('./storyListingPage.graphql');
const supportResourcesDetailPage = require('./nodeSupportResourcesDetailPage.graphql');
const taxonomiesQuery = require('./taxonomy-fragments/GetTaxonomies.graphql');
const vaFormPage = require('./vaFormPage.graphql');
const vamcOperatingStatusAndAlerts = require('./vamcOperatingStatusAndAlerts.graphql');
const vamcPolicyPages = require('./vamcPoliciesPage.graphql');
const { ALL_FRAGMENTS } = require('./fragments.graphql');

// Get current feature flags
const { cmsFeatureFlags } = global;

// String Helpers
const {
  updateQueryString,
  queryParamToBeChanged,
} = require('../../../../utilities/stringHelpers');

const nodeOffice = require('./nodeOffice.graphql');

let regString = '';
queryParamToBeChanged.forEach(param => {
  regString += `${param}|`;
});

const regex = new RegExp(`${regString}`, 'g');

const buildQuery = () => {
  const nodeContentFragments = `
  ${ALL_FRAGMENTS}
  ${landingPage.fragment}
  ${page.fragment}
  ${healthCareRegionPage.fragment}
  ${vbaFacility.fragment}
  ${healthCareLocalFacilityPage.fragment}
  ${healthCareRegionDetailPage.fragment}
  ${pressReleasePage.fragment}
  ${vamcOperatingStatusAndAlerts.fragment}
  ${newsStoryPage.fragment}
  ${nodeEvent.fragment}
  ${nodeEvent.fragmentWithoutBreadcrumbs}
  ${nodeOffice.fragment}
  ${bioPage.fragment}
  ${vaFormPage.fragment}
  ${benefitListingPage.fragment}
  ${nodeEventListing.fragment}
  ${storyListingPage.fragment}
  ${leadershipListingPage.fragment}
  ${healthServicesListingPage.fragment}
  ${pressReleasesListingPage.fragment}
  ${locationListingPage.fragment}
  ${qaPage.fragment}
  ${faqMultipleQaPage.fragment}
  ${stepByStepPage.fragment}
  ${mediaListImages.fragment}
  ${checklistPage.fragment}
  ${mediaListVideos.fragment}
  ${supportResourcesDetailPage.fragment}
  ${basicLandingPage.fragment}
  ${nodeCampaignLandingPage.fragment}
  ${vamcPolicyPages.fragment}
`;

  const nodeQuery = `
    nodeQuery(limit: 5000, filter: {
      conditions: [
        { field: "status", value: ["1"], enabled: $onlyPublishedContent }
      ]
    }) {
      entities {
        ... landingPage
        ... page
        ... healthCareRegionPage
        ... healthCareLocalFacilityPage
        ... healthCareRegionDetailPage
        ... vamcOperatingStatusAndAlerts
        ... nodeOffice
        ... benefitListingPage
        ... healthServicesListingPage
        ... locationListingPage
        ... vaFormPage
        ... nodeQa
        ... faqMultipleQA
        ... nodeStepByStep
        ... nodeMediaListImages
        ... nodeChecklist
        ... nodeMediaListVideos
        ... nodeSupportResourcesDetailPage
        ... nodeBasicLandingPage
        ... nodeCampaignLandingPage
        ... policiesPageFragment
        ... vbaFacilityFragment
      }
    }`;

  /**
   * Queries for all of the pages out of Drupal
   * To execute, run this query at http://staging.va.agile6.com/graphql/explorer.
   */
  const query = `

  ${nodeContentFragments}

  query GetAllPages($today: String!, $onlyPublishedContent: Boolean!) {
    ${nodeQuery}
    ${icsFileQuery.partialQuery}
    ${sidebarQuery.partialQuery}
    ${facilitySidebarQuery.partialQuery}
    ${outreachSidebarQuery.partialQuery}
    ${alertsQuery.partialQuery}
    ${bannersQuery.partialQuery}
    ${promoBannersQuery.partialQuery}
    ${bannerAlertsQuery.partialQuery}
    ${outreachAssetsQuery.partialQuery}
    ${homePageQuery.partialQuery}
    ${
      cmsFeatureFlags.FEATURE_ALL_HUB_SIDE_NAVS
        ? `${allSideNavMachineNamesQuery.partialQuery}`
        : ''
    }
    ${menuLinksQuery.partialQuery}
    ${taxonomiesQuery.partialQuery}
  }
`;

  return query.replace(regex, updateQueryString);
};

module.exports = buildQuery;
