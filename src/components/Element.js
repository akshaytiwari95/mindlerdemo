import React from 'react';

function Element({ data, add, subtract }) {
  //console.log(data.name);
  const [x, setx] = React.useState(true); //state used inside to toggle so that we can choose whether to  add or remove
  function toggle() {
    setx(prev => !prev);
  }
  return (
    <div>
      <div>
        <div>
          <img src={data.img} class="img-fluid" />
          <h3>{data.name} </h3>
        </div>
        <div>
          <p>{data.content}</p>
          <a
            href="https://www.mindler.com/login"
            target="_blank"
            class="graduate-free-demo"
          >
            {data.extra}
          </a>
          <div></div>
        </div>
        <hr />
        <div>
          <h4 id="dynamic_price_1">{data.price}</h4>
          {x ? ( //implemented ternary operator and choosing between to show add or remove
            <a
              href="javascript:void(0)"
              data-plan="1"
              class="add-green add_plan_btn"
            >
              <p
                onClick={function () {
                  add();
                  toggle();
                }}
              >
                Add to Plan
              </p>{' '}
              <img
                src="https://mindlerimages.imgix.net/tinyimg/plus-square.svg"
                alt=""
                class="img-fluid"
              />
            </a>
          ) : (
            <a
              href="javascript:void(0)"
              data-plan="1"
              class="remove-red remove_plan_btn"
            >
              <p
                onClick={function () {
                  subtract();
                  toggle();
                }}
              >
                Remove
              </p>{' '}
              <img
                src="https://mindlerimages.imgix.net/tinyimg/minus-square.svg"
                alt=""
                class="img-fluid"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default Element;
