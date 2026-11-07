import Link from 'next/link';
import type { CSSProperties } from 'react';
import { getDocs, getQuestions, type Subject } from '@/lib/db';

const accentStyle = (subject: Subject) =>
  ({
    '--accent': subject.accent,
    '--accent-soft': subject.accent_soft,
    '--primary': subject.accent,
  }) as CSSProperties;

export function StatsRow({ subjects }: { subjects: Subject[] }) {
  const docs = subjects.reduce((sum, subject) => sum + subject.doc_count, 0);
  const questions = subjects.reduce((sum, subject) => sum + subject.question_count, 0);

  return (
    <div className="stat-row">
      <div className="stat">
        <strong>{docs}</strong>
        <span>chuyên đề &amp; giáo trình</span>
      </div>
      <div className="stat">
        <strong>{questions}</strong>
        <span>bài tập có lời giải</span>
      </div>
      <div className="stat">
        <strong>{subjects.length}</strong>
        <span>môn học</span>
      </div>
      <div className="stat">
        <strong style={{ fontSize: '1.1rem', paddingTop: 5 }}>SQLite</strong>
        <span>cơ sở dữ liệu nội bộ</span>
      </div>
    </div>
  );
}

export function DocsOverview({ subjects }: { subjects: Subject[] }) {
  return (
    <>
      {subjects.map((subject) => {
        const docs = getDocs(subject.id);
        return (
          <article
            key={subject.slug}
            id={`subject-${subject.slug}`}
            className="subject-card is-accent"
            style={accentStyle(subject)}
          >
            <div className="subject-header">
              <div className="subject-title">
                <span>
                  {subject.emoji} Môn: {subject.name}
                </span>
                <span className="subject-badge">{subject.doc_count} tài liệu</span>
              </div>
            </div>
            <div className="subject-body">
              <p className="subject-desc">{subject.description}</p>
              <ul className="topic-list">
                {docs.map((doc) => (
                  <li key={doc.slug} className="topic-item">
                    <span className="num">{doc.num}</span>
                    <span>{doc.title}</span>
                  </li>
                ))}
              </ul>
              <div className="action-row">
                <Link
                  href={`/docs/${subject.slug}`}
                  className="btn btn-primary btn-lg"
                  style={{ background: subject.accent, borderColor: subject.accent }}
                >
                  📂 Mở toàn bộ tài liệu {subject.name} ({subject.doc_count} tài liệu) →
                </Link>
                {subject.question_count > 0 ? (
                  <Link href={`/homework/${subject.slug}`} className="btn btn-lg">
                    📝 {subject.question_count} bài tập
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export function HomeworkOverview({ subjects }: { subjects: Subject[] }) {
  const withHomework = subjects.filter((subject) => subject.question_count > 0);
  if (withHomework.length === 0) {
    return (
      <div className="empty-state">
        <strong>Chưa có bài tập nào</strong>
        Bài tập sẽ xuất hiện ở đây sau khi được thêm vào cơ sở dữ liệu.
      </div>
    );
  }

  return (
    <>
      {withHomework.map((subject) => {
        const questions = getQuestions(subject.id);
        return (
          <article
            key={subject.slug}
            id={`hw-${subject.slug}`}
            className="subject-card is-accent"
            style={accentStyle(subject)}
          >
            <div className="subject-header">
              <div className="subject-title">
                <span>
                  {subject.emoji} Môn: {subject.name}
                </span>
                <span className="subject-badge">{subject.question_count} bài tập</span>
              </div>
            </div>
            <div className="subject-body">
              <ul className="question-list">
                {questions.map((question) => (
                  <li key={question.slug} className="question-item">
                    <span className="num">{question.num}</span>
                    <span className="question-info">
                      <Link href={`/homework/${subject.slug}#${question.slug}`}>{question.title}</Link>
                      {question.note ? <span className="note">{question.note}</span> : null}
                    </span>
                    {question.status ? <span className="status-pill">{question.status}</span> : null}
                  </li>
                ))}
              </ul>
              <div className="action-row">
                <Link
                  href={`/homework/${subject.slug}`}
                  className="btn btn-primary btn-lg"
                  style={{ background: subject.accent, borderColor: subject.accent }}
                >
                  📂 Mở toàn bộ bài giải ({subject.question_count} bài) →
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
