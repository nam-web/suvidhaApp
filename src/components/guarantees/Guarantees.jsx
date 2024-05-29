import "./guarantees.scss";

export default function Guarantees() {
  return (
    <div className='guarantees'>
      <div className="title">
        <p>Suvidha Guarantees</p>
        <h2>We Deliver What We Promise</h2>
    </div>
    <div className="top">
      <div className="icon">
        <span class="material-symbols-outlined">more_time</span>
        <div className="content">
          <h6>On-time delivery</h6>
          <p>Thereby you can be assured of your submission.</p>
        </div> 
      </div>
      <div className="icon">
      <span class="material-symbols-outlined">recommend</span>
      <div className="content">
        <h6>100% Originality Guarantee</h6>
        <p>All our writing works are scanned through plagiarism software and ensure that the document is delivered with 95-100% plagiarism free</p>
      </div>
      </div>
    </div>

    <div className="top">
    <div className="icon">
      <span class="material-symbols-outlined">library_books</span>
        <div className="content">
          <h6>Unlimited Revisions</h6>
          <p>We offer unlimited revisions to the work being committed. Unlike other competitors, we do not charge for the revision.</p>
        </div>
      </div>
      <div className="icon">
        <span class="material-symbols-outlined">task</span>
        <div className="content">
          <h6>Subject Matter Expert</h6>
          <p>We assign expert specific to the subject. Hence you need not worry about the quality of work being delivered.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
