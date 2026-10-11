import Link from "next/link";
import Image from "next/image";

interface InstructorCoursesSectionProps {
  instructorName: string;
}

export default function InstructorCoursesSection({
  instructorName,
}: InstructorCoursesSectionProps) {
  const courses = [
    {
      id: 1,
      title: "Professional full-stack web development course.",
      image: "/assets/images/course/course-img-1.webp",
      badge: "Popular",
      category: "Development",
      level: "Intermediate",
      author: {
        name: "Emmielar Josan",
        avatar: "/assets/images/users/user-img-8.png",
      },
      meta: {
        lessons: "33 Lesson",
        duration: "6h 30m",
        students: "2.1k",
      },
      rating: {
        score: 4.9,
        count: "3K+",
      },
      price: {
        original: "$30.00",
        current: "$20.00",
      },
      href: "/courses-details",
    },
    {
      id: 2,
      title: "Business growth and strategy masterclass 2026.",
      image: "/assets/images/course/course-img-2.webp",
      badge: "New",
      category: "Business",
      level: "Beginner",
      author: {
        name: "Ronald Richards",
        avatar: "/assets/images/users/user-img-7.png",
      },
      meta: {
        lessons: "26 Lesson",
        duration: "3h 20m",
        students: "12.4K",
      },
      rating: {
        score: 4.7,
        count: "2K+",
      },
      price: {
        original: "$20.00",
        current: "$10.00",
      },
      href: "/courses-details",
    },
  ];

  return (
    <div id="courses" className="tj-instructor-courses">
      <h3 className="title">Courses by {instructorName.split(" ")[0]}</h3>
      <div className="row rg-20">
        {courses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <div className="tj-course-item">
              <div className="tj-course-img">
                <Link href={course.href}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={410}
                    height={270}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
                <div className="tj-product-badge">
                  <span>{course.badge}</span>
                </div>
                <div className="tj-wishlist-btn">
                  <button type="button" aria-label="Add to Wishlist">
                    <i className="tji-heart"></i>
                  </button>
                </div>
              </div>

              <div className="tj-course-content">
                <div className="tj-cat-level-wrap">
                  <div className="tj-categories">
                    <Link className="tj-cat" href={course.href}>
                      {course.category}
                    </Link>
                  </div>
                  <div className="tj-level">
                    <span>{course.level}</span>
                  </div>
                </div>

                <h3 className="title tj-fs-h5">
                  <Link href={course.href}>{course.title}</Link>
                </h3>

                <span className="author">
                  <Link href="/instructor">
                    <Image
                      src={course.author.avatar}
                      alt={course.author.name}
                      width={30}
                      height={30}
                      style={{ borderRadius: "50%", marginRight: "6px" }}
                    />
                    {course.author.name}
                  </Link>
                </span>

                <div className="course-meta">
                  <span>
                    <i className="tji-book"></i>
                    {course.meta.lessons}
                  </span>
                  <span>
                    <i className="tji-clock"></i>
                    {course.meta.duration}
                  </span>
                  <span>
                    <i className="tji-user-duo"></i>
                    {course.meta.students}
                  </span>
                </div>

                <div className="tj-course-price-wrap">
                  <div className="single-rating">
                    <i className="tji-star"></i>
                    <span className="label">
                      {course.rating.score}
                      <span>({course.rating.count})</span>
                    </span>
                  </div>
                  <div className="course-price tj-fs-h6">
                    {course.price.original && <del>{course.price.original}</del>}{" "}
                    {course.price.current}
                  </div>
                </div>

                <Link
                  className="tj-btn-primary tj-btn-primary-md flip-text-wrap"
                  href={course.href}
                >
                  <span className="btn-text">Start learning</span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-2"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
