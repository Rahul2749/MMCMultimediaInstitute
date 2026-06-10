import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const Mmc3dAnimationCurriculum = lazy(() => import('./pages/Mmc3dAnimationCurriculum'));
const MmcApplicationTransmissionComplete = lazy(() => import('./pages/MmcApplicationTransmissionComplete'));
const MmcAssetLibraryProductionRepository = lazy(() => import('./pages/MmcAssetLibraryProductionRepository'));
const MmcBeginYourProfessionalJourney = lazy(() => import('./pages/MmcBeginYourProfessionalJourney'));
const MmcFacultyMentors = lazy(() => import('./pages/MmcFacultyMentors'));
const MmcFilmEditingCurriculum = lazy(() => import('./pages/MmcFilmEditingCurriculum'));
const MmcGraphicDesignCurriculum = lazy(() => import('./pages/MmcGraphicDesignCurriculum'));
const MmcPortfolioSubmissionStep = lazy(() => import('./pages/MmcPortfolioSubmissionStep'));
const MmcProductionTimelineSchedule = lazy(() => import('./pages/MmcProductionTimelineSchedule'));
const MmcProjectCaseStudyNeonDrift = lazy(() => import('./pages/MmcProjectCaseStudyNeonDrift'));
const MmcReviewSubmitApplication = lazy(() => import('./pages/MmcReviewSubmitApplication'));
const MmcStudentDashboardMissionControl = lazy(() => import('./pages/MmcStudentDashboardMissionControl'));
const MmcStudentWorkGallery = lazy(() => import('./pages/MmcStudentWorkGallery'));
const MmcVfxProductionPipelineTracker = lazy(() => import('./pages/MmcVfxProductionPipelineTracker'));
const MmcVisualEffectsCurriculum = lazy(() => import('./pages/MmcVisualEffectsCurriculum'));
const MmcGamingCurriculum = lazy(() => import('./pages/MmcGamingCurriculum'));
const MmcBroadcastCurriculum = lazy(() => import('./pages/MmcBroadcastCurriculum'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-outline-variant border-t-secondary rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mmc-3d-animation-curriculum" element={<Mmc3dAnimationCurriculum />} />
            <Route path="/mmc-visual-effects-curriculum" element={<MmcVisualEffectsCurriculum />} />
            <Route path="/mmc-film-editing-curriculum" element={<MmcFilmEditingCurriculum />} />
            <Route path="/mmc-graphic-design-curriculum" element={<MmcGraphicDesignCurriculum />} />
            <Route path="/mmc-gaming-curriculum" element={<MmcGamingCurriculum />} />
            <Route path="/mmc-broadcast-curriculum" element={<MmcBroadcastCurriculum />} />
            <Route path="/mmc-faculty-mentors" element={<MmcFacultyMentors />} />
            <Route path="/mmc-student-work-gallery" element={<MmcStudentWorkGallery />} />
            <Route path="/mmc-begin-your-professional-journey" element={<MmcBeginYourProfessionalJourney />} />
            <Route path="/mmc-portfolio-submission-step" element={<MmcPortfolioSubmissionStep />} />
            <Route path="/mmc-review-submit-application" element={<MmcReviewSubmitApplication />} />
            <Route path="/mmc-application-transmission-complete" element={<MmcApplicationTransmissionComplete />} />
            <Route path="/mmc-production-timeline-schedule" element={<MmcProductionTimelineSchedule />} />
            <Route path="/mmc-project-case-study-neon-drift" element={<MmcProjectCaseStudyNeonDrift />} />
            <Route path="/mmc-student-dashboard-mission-control" element={<MmcStudentDashboardMissionControl />} />
            <Route path="/mmc-vfx-production-pipeline-tracker" element={<MmcVfxProductionPipelineTracker />} />
            <Route path="/mmc-asset-library-production-repository" element={<MmcAssetLibraryProductionRepository />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
