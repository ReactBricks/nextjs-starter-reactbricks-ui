import { types } from 'react-bricks/frontend'

// LAYOUT
import Header from './layout/Header'
import HeaderMenuItem from './layout/HeaderMenuItem'
import HeaderMenuSubItem from './layout/HeaderMenuSubItem'
import Footer from './layout/Footer'
import FooterColumn from './layout/FooterColumn'
import FooterLink from './layout/FooterLink'

// SHARED
import Badge from './shared/bricks/Badge'
import BulletListItem from './shared/bricks/BulletListItem'
import Button from './shared/bricks/Button'

// MAIN CONTENT SECTIONS
import TextMedia from './mainContent/TextMedia/TextMedia'
import TextMediaLogo from './mainContent/TextMedia/TextMediaLogo'
import Features from './mainContent/Features/Features'
import FeatureItem from './mainContent/Features/FeatureItem'
import FeatureCallout from './mainContent/FeatureCallout/FeatureCallout'
import Cards from './mainContent/Cards/Cards'
import Card from './mainContent/Cards/Card'
import LinkCards from './mainContent/LinkCards/LinkCards'
import LinkCard from './mainContent/LinkCards/LinkCard'

// HERO UNITS
import HeroUnit from './heroSections/HeroUnit/HeroUnit'
import HeroUnit2 from './heroSections/HeroUnit2/HeroUnit2'
import ImageCarousel from './heroSections/ImageCarousel/ImageCarousel'
import ImageCarouselItem from './heroSections/ImageCarousel/ImageCarouselItem'

// CALL TO ACTION
import CallToAction from './cta/CallToAction/CallToAction'
import NewsletterHero from './cta/NewsletterHero/NewsletterHero'
import NewsletterSubscribe from './cta/NewsletterSubscribe/NewsletterSubscribe'

// SEPARATORS
import HorizontalRule from './separators/HorizontalRule/HorizontalRule'
import Spacer from './separators/Spacer/Spacer'

// TEAM
import Team from './team/Team/Team'
import TeamItem from './team/Team/TeamItem'
import Team2Cols from './team/Team2Cols/Team2Cols'
import Team2ColsItem from './team/Team2Cols/Team2ColsItem'

// TESTIMONIAL
import Testimonial from './testimonials/Testimonial/Testimonial'
import Testimonial3Cols from './testimonials/Testimonial3Cols/Testimonial3Cols'
import Testimonial3ColsItem from './testimonials/Testimonial3Cols/Testimonial3ColsItem'

// LOGO SECTIONS
import Customers from './logos/Customers/Customers'
import Customer from './logos/Customers/CustomerItem'
import LogoGrid from './logos/LogoGrid/LogoGrid'
import LogoGridItem from './logos/LogoGrid/LogoGridItem'
import SmallLogoGrid from './logos/SmallLogoGrid/SmallLogoGrid'
import SmallLogoGridItem from './logos/SmallLogoGrid/SmallLogoGridItem'

// FAQ
import Faqs from './Faq/Faq'
import Faqs2cols from './Faq/Faq2cols'
import Faq from './Faq/FaqItem'

// CONTACT
import Offices from './contacts/Offices/Offices'
import Office from './contacts/Offices/Office'
import ContactsForm from './contacts/ContactsForm/ContactsForm'
import Map from './contacts/Map/Map'
import FormBuilder from './contacts/FormBuilder/FormBuilder'
import FormInput from './contacts/FormBuilder/FormInput'
import FormTextarea from './contacts/FormBuilder/FormTextarea'
import FormSelect from './contacts/FormBuilder/FormSelect'
import FormCheckbox from './contacts/FormBuilder/FormCheckbox'
import FormRadiobuttons from './contacts/FormBuilder/FormRadiobuttons'
import FormSingleRadio from './contacts/FormBuilder/FormSingleRadio'

// PRICING
import Pricing from './pricing/Pricing'
import PricingPlan from './pricing/PricingPlan'
import PlanFeature from './pricing/PlanFeature'

// SINGLE COLUMN
import Title from './singleColumnContent/Title/Title'
import Paragraph from './singleColumnContent/Paragraph/Paragraph'
import BigImage from './singleColumnContent/BigImage/BigImage'
import Video from './singleColumnContent/Video/Video'
import Code from './singleColumnContent/Code/Code'
import Table from './singleColumnContent/Table/Table'
import TableRow from './singleColumnContent/Table/TableRow'
import TableCell from './singleColumnContent/Table/TableCell'
import Tweet from './singleColumnContent/Tweet/Tweet'
import TweetLight from './singleColumnContent/Tweet/TweetLight'
import BlogTitle from './singleColumnContent/BlogTitle/BlogTitle'

// DOCUMENTS
import Documents from './Documents/Documents'
import Document from './Documents/Document'
import ExternalData from './singleColumnContent/ExternalData/ExternalData'

// Theme structure
const allBricks: types.Theme = {
  themeName: 'React Bricks UI',
  categories: [
    {
      categoryName: 'Main content',
      bricks: [
        TextMedia,
        TextMediaLogo,
        Features,
        FeatureItem,
        FeatureCallout,
        Cards,
        Card,
        LinkCards,
        LinkCard,
      ],
    },
    {
      categoryName: 'Hero sections',
      bricks: [HeroUnit, HeroUnit2, ImageCarousel, ImageCarouselItem],
    },
    {
      categoryName: 'Call to action',
      bricks: [CallToAction, NewsletterHero, NewsletterSubscribe],
    },
    {
      categoryName: 'Separators',
      bricks: [Spacer, HorizontalRule],
    },
    {
      categoryName: 'Team',
      bricks: [Team, TeamItem, Team2Cols, Team2ColsItem],
    },
    {
      categoryName: 'Testimonial',
      bricks: [Testimonial, Testimonial3Cols, Testimonial3ColsItem],
    },
    {
      categoryName: 'Logo sections',
      bricks: [
        Customers,
        Customer,
        LogoGrid,
        LogoGridItem,
        SmallLogoGrid,
        SmallLogoGridItem,
      ],
    },
    {
      categoryName: 'FAQ',
      bricks: [Faqs, Faq, Faqs2cols],
    },
    {
      categoryName: 'Contact',
      bricks: [
        Offices,
        Office,
        ContactsForm,
        Map,
        FormBuilder,
        FormInput,
        FormTextarea,
        FormSelect,
        FormCheckbox,
        FormRadiobuttons,
        FormSingleRadio,
      ],
    },
    {
      categoryName: 'Pricing',
      bricks: [Pricing, PricingPlan, PlanFeature],
    },
    {
      categoryName: 'Single column / Blog',
      bricks: [
        Title,
        Paragraph,
        BigImage,
        Video,
        Code,
        Table,
        TableRow,
        TableCell,
        Tweet,
        TweetLight,
        BlogTitle,
        ExternalData,
      ],
    },
    {
      categoryName: 'Documents',
      bricks: [Documents, Document],
    },
    {
      categoryName: 'Layout',
      bricks: [
        Header,
        HeaderMenuItem,
        HeaderMenuSubItem,
        Footer,
        FooterColumn,
        FooterLink,
      ],
    },
    {
      categoryName: 'Shared',
      bricks: [Badge, BulletListItem, Button],
    },
  ],
}

// Single bricks
export {
  Header,
  HeaderMenuItem,
  HeaderMenuSubItem,
  Footer,
  FooterColumn,
  FooterLink,
  Badge,
  Button,
  BulletListItem,
  HeroUnit,
  HeroUnit2,
  TextMedia,
  TextMediaLogo,
  Title,
  Testimonial,
  Testimonial3Cols,
  Testimonial3ColsItem,
  Customers,
  Customer,
  LogoGrid,
  LogoGridItem,
  SmallLogoGrid,
  SmallLogoGridItem,
  Faqs,
  Faq,
  Faqs2cols,
  CallToAction,
  Map,
  Offices,
  Office,
  ContactsForm,
  FeatureCallout,
  NewsletterHero,
  NewsletterSubscribe,
  Team,
  TeamItem,
  Team2Cols,
  Team2ColsItem,
  Features,
  FeatureItem,
  Cards,
  Card,
  LinkCards,
  LinkCard,
  ImageCarousel,
  ImageCarouselItem,
  Video,
  HorizontalRule,
  Spacer,
  FormBuilder,
  FormCheckbox,
  FormInput,
  FormSelect,
  FormRadiobuttons,
  FormSingleRadio,
  FormTextarea,
  Table,
  TableRow,
  TableCell,
  Code,
  Paragraph,
  BigImage,
  Tweet,
  TweetLight,
  Pricing,
  PricingPlan,
  PlanFeature,
  Documents,
  Document,
}

export default allBricks
