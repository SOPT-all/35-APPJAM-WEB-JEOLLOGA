import InfoBtn from '@components/common/button/infoBtn/InfoBtn';

import userHelpStyle from './helpContent.css';

interface HelpSectionProps {
  onNoticeClick: () => void;
  onQuestionClick: () => void;
}

const HelpSection = ({ onNoticeClick, onQuestionClick }: HelpSectionProps) => (
  <nav className={userHelpStyle}>
    <InfoBtn label="공지사항" onClick={onNoticeClick} hasDivider={true} />
    <InfoBtn label="문의하기" onClick={onQuestionClick} />
  </nav>
);

export default HelpSection;
