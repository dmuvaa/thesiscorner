// <div>
        //     <div id="price-calculator" className="calculator">
        //         <h2>Calculate your paper price</h2>
        //         <label htmlFor="paperType">Type of paper</label>
        //         <select id="paperType">
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="academicLevel">Academic level</label>
        //         <select id="academicLevel" value={academicLevel} onChange={e => setAcademicLevel(e.target.value)}>
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="deadline">Deadline</label>
        //         <select id="deadline" value={deadline} onChange={e => setDeadline(e.target.value)}>
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="pages">Pages</label>
        //         <div className="page-counter">
        //             <button type="button" onClick={() => changePageCount(-1)}>-</button>
        //             <input type="number" id="pageCount" value={pageCount} min="1" onChange={e => setPageCount(e.target.value)} />
        //             <button type="button" onClick={() => changePageCount(1)}>+</button>
        //             (275 words)
        //         </div>
            
        //         <div className="price-display">
        //             Approximate price: <span id="price">{calculatePrice()}</span>
        //         </div>
            
        //         <button type="button" onClick={continueToOrder}>CONTINUE TO ORDER</button>
        //     </div>
        //     <button onClick={() => changePageCount(-1)}>Decrease Page Count</button>
        //     <button onClick={() => changePageCount(1)}>Increase Page Count</button>
        //     <p>{calculatePrice()}</p>
        //     <button onClick={continueToOrder}>Continue to Order</button>
        // </div>
         // function continueToOrder() {
  //     // Store the selections in localStorage
  //     localStorage.setItem('paperType', paperType);
  //     localStorage.setItem('academicLevel', academicLevel);
  //     localStorage.setItem('deadline', deadline);
  //     localStorage.setItem('pageCount', pageCount);
  //     localStorage.setItem('price', calculatePrice());

  //     // Redirect to the order form page
  //     window.location.href = '/order-form'; // Update this to the URL of your order form
  // };

  // return (
  //     <>
  //     <form>
  //     <div className="p-2">
  //         <div>
  //             <h1>Calculate your paper price</h1>
  //         </div>

  //         <label htmlFor="paperType">Type of paper</label>
  //             <select id="paperType">
  //                 <option value="argumentative">Argumentative essays</option>
  //                 <option value="analytical">Analytical essays</option>
  //                 <option value="dissertation">Dissertation/Dissertation Chapter</option>
  //                 <option value="journal">Journal</option>
  //                 <option value="bookreview">Book Review</option>
  //                 <option value="literature">Literature Analysis/Review</option>
  //                 <option value="businessplan">Business Plan</option>
  //                 <option value="article">Article</option>
  //                 <option value="general">General Task</option>
  //                 <option value="thesis">Thesis/Thesis Chapter</option>
  //             </select>
  //         <label htmlFor="academicLevel">Academic level</label>
  //             <select id="academicLevel">
  //                 <option value="high_school">High school</option>
  //                 <option value="college">College</option>
  //                 <option value="undergraduate">Undergraduate</option>
  //                 <option value="masters">Master's</option>
  //                 <option value="phd">PhD</option>

  //             </select>

  //             <label htmlFor="deadline">Deadline</label>
  //             <select id="deadline">
  //                 <option value="8_hours">8 Hours</option>
  //                 <option value="12_hours">12 Hours</option>
  //                 <option value="24_hours">24 Hours</option>
  //                 <option value="36_hours">36 Hours</option>
  //                 <option value="48_hours">48 Hours</option>
  //                 <option value="3_days">3 days</option>
  //                 <option value="5_days">5 days</option>
  //                 <option value="7_days">7 Days</option>
  //                 <option value="14_days">14 Days</option>

  //             </select>

  //             <label htmlFor="pages">Pages</label>
  //             <div className="page-counter">
  //                 <button type="button" id="decreasePageCount">-</button>
  //                 <input type="number" id="pageCount" value="1" min="1">
  //                 <button type="button" id="increasePageCount">+</button>
  //                 (275 words)
  //             </div>
  //             <div className="price-display">
  //                 Approximate price: <span id="price">$12</span>
  //             </div>

  //             <button type="button" id="continueToOrder">CONTINUE TO ORDER</button>

  //     </div>
  //     </form>
  //     </>
  // );