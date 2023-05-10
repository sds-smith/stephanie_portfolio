import FEP_graphic from '../images/FEP_graphic.png';
import FEPCongress from '../documents/FEPCongress.pdf';
import StylesCheatsheet_graphic from '../images/Styles-Cheatsheet_graphic.png';
import Styles_Cheatsheet from '../documents/Styles_Cheatsheet.pdf';
import HeritageHarbor_graphic from '../images/HeritageHarbor_graphic.png'
import Heritage_Harbor_Detailed_Recommendations from '../documents/HeritageHarbor_Detailed_Marketing_Recommendations.pdf'
import HH_Community_Doublefold from '../documents/HH-Community-Doublegatefold-V4.pdf';
import HHDoublefold_graphic from '../images/HH_Doublegatefold_Graphic.png';
import IABrandingGuide from '../documents/IA-Branding-Guideline-Book-v1-a.pdf';
import IABrand_graphic from '../images/IA_Branding_graphic.png';
import AlereDoc from '../documents/AlereHomeMonitoring.pdf';
import Alere_graphic from '../images/Alere_graphic.png';
import FiveDayWkflwDoc from '../documents/Five_Day_Workflow_Process_LeadGen_Updated _vs2.pdf';
import FiveDayWkflw_graphic from '../images/Five_Day_Wkflw_graphic.png';
import HHCustomerJourneyMap from '../documents/HH_Customer_Journey_Map.pdf';
import HHCustomerJourney_graphic from '../images/HH_CustomerJourney_graphic.png';
import SRCLeadWkflw from '../documents/SRC_Lead_Workflow.pdf';
import SRCLead_graphic from '../images/SRC_Lead_Wkflw_graphic.png'
import SRC_General_Nurture from '../documents/SRC_General_Nurture.pdf';
import River_graphic from '../images/River_graphic.png';
import AtlantisDoc from '../documents/Atlantis-Cool-Branch_UX-Audit_Jan310_2018.pdf';
import Atlantis_graphic from '../images/Atlantis_graphic.png';
import CignaDoc from '../documents/Cigna_Med_Supp-TestingWireframeQuestions_vs3.pdf';
import Cigna_graphic from '../images/Cigna_graphic.png';
import CarefirstBlogDoc from '../documents/CarefirstBlogStrategy.pdf';
import CarefirstBlog_graphic from '../images/CarefirstBlog_graphic.png';
import CarefirstPaidDoc from '../documents/CareFirst_Paid_Linkedin_Research.pdf';
import CarefirstPaid_graphic from '../images/LinkedinStrategy_graphic.png';
import InfoArchDoc from '../documents/Information_Architecture-revised-IA2.pdf';
import InfoArch_graphic from '../images/InformationArchitecture_graphic.png';
import MOEMHHDoc from '../documents/MOEM_HeritageHarbor.pdf';
import MOEMHH_graphic from '../images/MOEM_HH_graphic.png';
import DentalDoc from '../documents/dentalhealth.pdf';
import Dental_graphic from '../images/DentalCampaign_graphic.png';
import SocialStrategyDoc from '../documents/2016SocialStrategy_FINALDRAFT.pdf';
import Social_graphic from '../images/SocialStrategy_graphic.png';
import JFAMOEMDoc from '../documents/JFA_MOEM_V5.pdf';
import JFAMOEM_graphic from '../images/JFA_graphic.png';

const projects = {
    "Brand, Brand Development" : [
        {
            id : 1,
            heading : "Immersion Active Brand Guidelines",
            subHeading : "",
            description : "",
            image : IABrand_graphic,
            document : IABrandingGuide,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/IA-Branding-Guideline-Book-v1-a.pdf',
            path : "ia_branding_guidelines"
        },
    ],
    "Content Strategies & Creation" : [

    ],
    "Lead Generation & Media Plans" : [

    ],
    "Social Strategy & Content" : [
        {
            id : 1,
            heading : "Carefirst Blog Strategy",
            subHeading : "",
            description : "",
            image : CarefirstBlog_graphic,
            document : CarefirstBlogDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/CarefirstBlogStrategy.pdf',
            path : "carefirst_blog_strategy"
        }, 
        {
            id : 2,
            heading : "Carefirst Paid Social Strategy",
            subHeading : "Linkedin Strategy",
            description : "",
            image : CarefirstPaid_graphic,
            document : CarefirstPaidDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/CareFirst_Paid_Linkedin_Research.pdf',
            path : "carefirst_paid_strategy"
        },
    ],
    "Product Marketing" : [
        {
            id : 1,
            heading : "FEP/Congressional Employees",
            subHeading : "Direct Response Advertising Campaign",
            description : "• Overall, the combined FEP/Congress campaign generated 9.7MM impressions, 21,107 clicks and 9,521 visits to the combined landing page, surpassing the 2014 campaign benchmark of 8,330 landing page visits",
            image : FEP_graphic,
            document : FEPCongress,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/FEPCongress.pdf',
            path : "fep_congressional_emp_direct_response_campaign"
        },
        {
            id : 2,
            heading : "Dental Health",
            subHeading : "",
            description : "",
            image : Dental_graphic,
            document : DentalDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/dentalhealth.pdf',
            path : "dental_health"
        },
    ],
    "Website Design & Creative" : [
        {
            id : 1,
            heading : "Atlantis UX Audit",
            subHeading : "",
            description : "",
            image : Atlantis_graphic,
            document : AtlantisDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/Atlantis-Cool-Branch_UX-Audit_Jan310_2018.pdf',
            path : "atlantis_us_audit"
        },
        {
            id : 2,
            heading : "Cigna Med Supply",
            subHeading : "",
            description : "",
            image : Cigna_graphic,
            document : CignaDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/Cigna_Med_Supp-TestingWireframeQuestions_vs3.pdf',
            path : "cigna_med_supply"
        },
        {
            id : 3,
            heading : "Information Architecture",
            subHeading : "",
            description : "",
            image : InfoArch_graphic,
            document : InfoArchDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/Information_Architecture-revised-IA2.pdf',
            path : "information_architecture"
        },
    ],
    "Analytics, SEO" : [
        {
            id : 1,
            heading : "Alere Home Monitoring",
            subHeading : "SEO Recommendations",
            description : "",
            image : Alere_graphic,
            document : AlereDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/AlereHomeMonitoring.pdf',
            path : "alere_home_monitoring"
        },
    ],
    "Operational Efficiencies" : [
        {
            id : 1,
            heading : "CSS Styles Cheat Sheet",
            subHeading : "",
            description : "",
            image : StylesCheatsheet_graphic,
            document : Styles_Cheatsheet,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/Styles_Cheatsheet.pdf',
            path : "css_styles_cheat_sheet"
        },
        {
            id : 2,
            heading : "Five Day Workflow",
            subHeading : "Process for Lead Generation",
            description : "",
            image : FiveDayWkflw_graphic,
            document : FiveDayWkflwDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/Five_Day_Workflow_Process_LeadGen_Updated _vs2.pdf',
            path : "five_day_workflow"
        },
        {
            id : 3,
            heading : "Lead Generation",
            subHeading : "Social Media Strategy",
            description : "",
            image : Social_graphic,
            document : SocialStrategyDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/2016SocialStrategy_FINALDRAFT.pdf',
            path : "lead_gen_social"
        },
    ],
    "Brand Market Planning" : [
        {
            id : 1,
            heading : "Heritage Harbor",
            subHeading : "Detailed Marketing Recommendations",
            description : "",
            image : HeritageHarbor_graphic,
            document : Heritage_Harbor_Detailed_Recommendations,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/HeritageHarbor_Detailed_Marketing_Recommendations.pdf',
            path : "hh_marketing_recommendations"
        },
        {
            id : 2,
            heading : "Heritage Harbor",
            subHeading : "Doublefold Brochure",
            description : "",
            image : HHDoublefold_graphic,
            document : HH_Community_Doublefold,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/HH-Community-Doublegatefold-V4.pdf',
            path : "hh_doublefold"
        },
    ],
    "Customer Journey" : [
        {
            id : 1,
            heading : "Heritage Harbor",
            subHeading : "Customer Journey Map",
            description : "",
            image : HHCustomerJourney_graphic,
            document : HHCustomerJourneyMap,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/HH_Customer_Journey_Map.pdf',
            path : "hh_customer_journey_map"
        },
        {
            id : 2,
            heading : "Heritage Harbor MOEM",
            subHeading : "",
            description : "",
            image : MOEMHH_graphic,
            document : MOEMHHDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/MOEM_HeritageHarbor.pdf',
            path : "hh_moem"
        },
        {
            id : 3,
            heading : "Joy for All MOEM",
            subHeading : "",
            description : "",
            image : JFAMOEM_graphic,
            document : JFAMOEMDoc,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/JFA_MOEM_V5.pdf',
            path : "jfa_moem"
        },
    ],
    "Email Marketing Campaigns" : [
        {
            id : 1,
            heading : "Saluda River Club",
            subHeading : "Workflow",
            description : "",
            image : SRCLead_graphic,
            document : SRCLeadWkflw,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/SRC_Lead_Workflow.pdf',
            path : "src_lead_workflow"
        },
        {
            id : 2,
            heading : "Saluda River Club",
            subHeading : "General Nurture Campaign",
            description : "",
            image : River_graphic,
            document : SRC_General_Nurture,
            documentUrl : 'https://stephanie-smith-marketing.s3.amazonaws.com/SRC_General_Nurture.pdf',
            path : "src_general_nurture"
        },
    ],
}

export default projects;
