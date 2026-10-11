interface CourseOverviewTabProps {
  learningGoals?: string[];
  skills?: string[];
  description?: string;
  requirements?: string[];
  intendedAudience?: string[];
}

export default function CourseOverviewTab({
  learningGoals = [
    "Build and train neural networks from scratch in Python.",
    "Master TensorFlow, PyTorch and scikit-learn workflows.",
    "Fine-tune large language models and generative AI",
    "Build a career-ready portfolio of 8 deployed projects.",
    "Deploy machine learning models to production with MLOps",
    "Work with real datasets: cleaning, features and pipelines",
    "Evaluate models with the right metrics and validation",
    "Understand the math behind gradient descent and backprop",
  ],
  skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Deep Learning",
    "MLOps",
    "Data Wrangling",
    "NLP",
    "Model Deployment",
    "Generative AI",
    "Computer Vision",
  ],
  description = "This comprehensive program takes you from the fundamentals of machine learning to building and deploying production-grade AI systems. You'll write real code from day one — training models, tuning hyperparameters and shipping them to the cloud.",
  requirements = [
    "Basic programming knowledge (any language) is helpful but not required",
    "A computer with internet access — no expensive GPU needed",
    "Curiosity and willingness to build hands-on projects",
  ],
  intendedAudience = [
    "Aspiring ML engineers who want a structured, project-based path",
    "Developers looking to add AI skills to their toolkit",
    "Data analysts moving into machine learning roles",
    "Students and career-changers building a portfolio",
  ],
}: CourseOverviewTabProps) {
  return (
    <div id="overview" className="tj-course-overview mb-5">
      <div className="tutor-course-details-content">
        {/* Learning goals box */}
        <div className="tj-course-details-box mb-4">
          <h3 className="title">Learning goals</h3>
          <ul className="tj-list">
            {learningGoals.map((goal, idx) => (
              <li key={idx}>
                <span className="icon">
                  <i className="tji-check"></i>
                </span>
                <span className="text">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills pill badges */}
        <h3 className="title mt-4 mb-3">Skills you&apos;ll gain</h3>
        <div className="tj-skill-lists d-flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="tj-skill-item">
              {skill}
            </span>
          ))}
        </div>

        {/* Course description */}
        <h3 className="title mt-4 mb-3">Course description</h3>
        <p>{description}</p>
        <p>
          Through 12 modules and 8 capstone projects, you&apos;ll develop the intuition and practical skills
          employers look for. By the end you&apos;ll have a portfolio of deployed AI applications and a recognized
          certificate to prove it.
        </p>

        {/* Requirements */}
        <h3 className="title mt-4 mb-3">Requirements</h3>
        <ul className="course-details-list mb-4">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>

        {/* Intended audience */}
        <h3 className="title mt-4 mb-3">Intended audience</h3>
        <ul className="tj-list tj-list-2">
          {intendedAudience.map((item, idx) => (
            <li key={idx}>
              <span className="icon">
                <i className="tji-check"></i>
              </span>
              <span className="text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
