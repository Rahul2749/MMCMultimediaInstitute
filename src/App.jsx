import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Mmc3dAnimationCurriculum from './pages/Mmc3dAnimationCurriculum';
import MmcApplicationTransmissionComplete from './pages/MmcApplicationTransmissionComplete';
import MmcAssetLibraryProductionRepository from './pages/MmcAssetLibraryProductionRepository';
import MmcBeginYourProfessionalJourney from './pages/MmcBeginYourProfessionalJourney';
import MmcFacultyMentors from './pages/MmcFacultyMentors';
import MmcFilmEditingCurriculum from './pages/MmcFilmEditingCurriculum';
import MmcGraphicDesignCurriculum from './pages/MmcGraphicDesignCurriculum';
import MmcPortfolioSubmissionStep from './pages/MmcPortfolioSubmissionStep';
import MmcProductionTimelineSchedule from './pages/MmcProductionTimelineSchedule';
import MmcProjectCaseStudyNeonDrift from './pages/MmcProjectCaseStudyNeonDrift';
import MmcReviewSubmitApplication from './pages/MmcReviewSubmitApplication';
import MmcStudentDashboardMissionControl from './pages/MmcStudentDashboardMissionControl';
import MmcStudentWorkGallery from './pages/MmcStudentWorkGallery';
import MmcVfxProductionPipelineTracker from './pages/MmcVfxProductionPipelineTracker';
import MmcVisualEffectsCurriculum from './pages/MmcVisualEffectsCurriculum';
import MmcGamingCurriculum from './pages/MmcGamingCurriculum';
import MmcBroadcastCurriculum from './pages/MmcBroadcastCurriculum';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/mmc-3d-animation-curriculum" element={<Mmc3dAnimationCurriculum />} />
          <Route path="/mmc-application-transmission-complete" element={<MmcApplicationTransmissionComplete />} />
          <Route path="/mmc-asset-library-production-repository" element={<MmcAssetLibraryProductionRepository />} />
          <Route path="/mmc-begin-your-professional-journey" element={<MmcBeginYourProfessionalJourney />} />
          <Route path="/mmc-faculty-mentors" element={<MmcFacultyMentors />} />
          <Route path="/mmc-film-editing-curriculum" element={<MmcFilmEditingCurriculum />} />
          <Route path="/mmc-graphic-design-curriculum" element={<MmcGraphicDesignCurriculum />} />
          <Route path="/" element={<Home />} />
          <Route path="/mmc-portfolio-submission-step" element={<MmcPortfolioSubmissionStep />} />
          <Route path="/mmc-production-timeline-schedule" element={<MmcProductionTimelineSchedule />} />
          <Route path="/mmc-project-case-study-neon-drift" element={<MmcProjectCaseStudyNeonDrift />} />
          <Route path="/mmc-review-submit-application" element={<MmcReviewSubmitApplication />} />
          <Route path="/mmc-student-dashboard-mission-control" element={<MmcStudentDashboardMissionControl />} />
          <Route path="/mmc-student-work-gallery" element={<MmcStudentWorkGallery />} />
          <Route path="/mmc-vfx-production-pipeline-tracker" element={<MmcVfxProductionPipelineTracker />} />
          <Route path="/mmc-visual-effects-curriculum" element={<MmcVisualEffectsCurriculum />} />
          <Route path="/mmc-gaming-curriculum" element={<MmcGamingCurriculum />} />
          <Route path="/mmc-broadcast-curriculum" element={<MmcBroadcastCurriculum />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
