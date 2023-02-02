import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import App from "../../App";
import { InboxOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { icons } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const BannerTwo = () => {
  // const [src,setSrc] = useState(null)

  const [count, setCount] = useState(0);

  const props = {
    name: "file",
    method: "POST",
    crossOrigin: "anonymous",
    multiple: false,
    action: "https://impressionsone.herokuapp.com/uploads",
    onChange(info) {
      const { status } = info.file;
      setCount(0);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setCount(1);

        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
      setCount(0);
      console.log(count);
    },
  };

  return (
    <div className="banner banner-style-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1 className="title">Analyse Youtube Thumbnails</h1>

              <div></div>

              {/* <form>
              <div class="drag-image">
    <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
    <h6>Drag & Drop File Here</h6>
    <span>OR</span>
    <button>Browse File</button>
    <input type="file" hidden/>
  </div>
  </form> */}
              <ul className="dragndropUL">
                <li>
                  <Dragger
                    {...props}
                    listType="picture"
                    maxCount={1}
                    className="drag-image"
                    accept=".png,.jpg,.jpeg,"
                  >
                    <img
                      className="icon"
                      src={process.env.PUBLIC_URL + "/images/up-arrow.png"}
                    />
                    {/* <img className="iconlight"
                        src={process.env.PUBLIC_URL + "/images/uploadLight.png"}
                      />
                      <img className="icondark"
                        src={process.env.PUBLIC_URL + "/images/uploadDark.png"}
                      />
                      <img className="icondark2"
                        src={process.env.PUBLIC_URL + "/images/uploadDark2.png"}
                      /> */}

                    <p className="upload-text">Select or drop your thumbnail</p>
                    <p className="ant-upload-hint"></p>

                    {/* <Button onClick={sendAnt}>Submit</Button> */}
                    {/* <img className="testtt"  src={src}/> */}
                  </Dragger>
                </li>

                <li>
                  {/* <Link
                  onClick={event => event.preventDefault()}
                    to={"/results"}
                    className="axil-btn btn-fill-white btn-large bannerBtn"
                    
                  >
                    Analyse
                  </Link> */}
                  {count === 0 ? null : (
                    <Link
                      to="/results"
                      className="axil-btn btn-fill-white btn-large bannerBtn"
                    >
                      Analyse
                    </Link>
                  )}

                  {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
                </li>
              </ul>

              {/* <UploadImages /> */}

              {/* code for drag and drop */}
              {/* <div class="droppable">
  <div class="list"></div>
  <div class="info">
    <div class="info-drag info-item">
      <svg class="info-svg" fill="#3f4754" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path class="filled-ball" d="M149.332031 360.078125c0 41.238281-33.429687 74.667969-74.664062 74.667969C33.429688 434.746094 0 401.316406 0 360.078125c0-41.234375 33.429688-74.664063 74.667969-74.664063 41.234375 0 74.664062 33.429688 74.664062 74.664063zm0 0" fill="#e0c3fc"/>
        <path class="ball" d="M220.332031 304.078125c0 41.238281-33.429687 74.667969-74.664062 74.667969C104.429688 378.746094 71 345.316406 71 304.078125c0-41.234375 33.429688-74.664063 74.667969-74.664063 41.234375 0 74.664062 33.429688 74.664062 74.664063zm0 0" fill="#8ec5fc" opacity="0" />
        <path class="hand" d="M331.734375 509.414062H202.667969c-5.890625 0-10.667969-4.78125-10.667969-10.667968 0-29.417969 23.9375-53.332032 53.332031-53.332032H262.25l-81.558594-81.558593c-12.96875-12.96875-12.96875-34.113281 0-47.082031 12.992188-12.949219 34.113282-12.949219 47.085938 0l19.132812 19.113281c1.625-3.625 3.90625-7.039063 6.890625-10.027344 7.40625-7.402344 18.050781-10.835937 28.203125-9.429687 1.21875-6.3125 4.246094-12.351563 9.132813-17.234376 9.320312-9.34375 22.824219-11.96875 34.496093-7.894531 1.554688-4.90625 4.289063-9.535156 8.167969-13.441406 12.972657-12.96875 34.113281-12.96875 47.085938 0l33.066406 33.089844C435.902344 332.902344 448 362.105469 448 393.167969c0 64.105469-52.160156 116.246093-116.265625 116.246093zm-116.585937-21.335937h116.585937c52.351563 0 94.933594-42.578125 94.933594-94.910156 0-25.367188-9.878907-49.214844-27.796875-67.113281l-33.070313-33.089844c-4.671875-4.671875-12.242187-4.671875-16.914062 0s-4.671875 12.246094 0 16.917968C350.953125 311.953125 352 314.683594 352 317.414062c0 2.730469-1.046875 5.460938-3.113281 7.550782-4.160157 4.160156-10.925781 4.160156-15.085938 0l-10.664062-10.667969c-4.671875-4.671875-12.246094-4.671875-16.917969 0-2.261719 2.242187-3.5 5.269531-3.5 8.449219 0 3.179687 1.238281 6.207031 3.5 8.449218l10.667969 10.664063C318.953125 343.953125 320 346.683594 320 349.414062c0 2.730469-1.046875 5.460938-3.113281 7.550782-4.160157 4.160156-10.925781 4.160156-15.085938 0l-16-16c-4.519531-4.5-12.394531-4.5-16.914062 0-2.261719 2.238281-3.5 5.269531-3.5 8.449218 0 3.175782 1.238281 6.164063 3.476562 8.445313l26.6875 26.691406c2.070313 2.066407 3.117188 4.796875 3.117188 7.527344s-1.046875 5.460937-3.117188 7.554687c-4.160156 4.160157-10.921875 4.160157-15.082031 0l-67.777344-67.777343c-4.671875-4.671875-12.242187-4.671875-16.914062 0-2.261719 2.238281-3.5 5.269531-3.5 8.449219 0 3.175781 1.238281 6.207031 3.5 8.445312l99.773437 99.777344c3.050781 3.050781 3.96875 7.636718 2.304688 11.625-1.640625 3.992187-5.546875 6.59375-9.855469 6.59375h-42.667969c-13.90625 0-25.769531 8.917968-30.183593 21.332031zm0 0"/>
        <path d="M74.667969 434.746094C33.492188 434.746094 0 401.253906 0 360.078125c0-41.171875 33.492188-74.664063 74.667969-74.664063 41.171875 0 74.664062 33.492188 74.664062 74.664063 0 41.175781-33.492187 74.667969-74.664062 74.667969zm0-128c-29.398438 0-53.335938 23.914062-53.335938 53.332031 0 29.421875 23.9375 53.335937 53.335938 53.335937C104.0625 413.414062 128 389.5 128 360.078125c0-29.417969-23.9375-53.332031-53.332031-53.332031zm0 0"/>
        <path d="M452.414062 144.976562c-4.796874 0-9.171874-3.265624-10.34375-8.148437-1.386718-5.742187 2.132813-11.5 7.851563-12.886719 5.78125-1.410156 11.261719-3.753906 16.253906-6.976562 4.949219-3.15625 11.5625-1.75 14.742188 3.199218 3.179687 4.949219 1.769531 11.5625-3.199219 14.742188-7 4.5-14.65625 7.785156-22.765625 9.769531-.851563.191407-1.707031.300781-2.539063.300781zm-41.703124-4.011718c-1.472657 0-2.988282-.320313-4.4375-.960938-7.554688-3.453125-14.464844-8.128906-20.503907-13.910156-4.265625-4.050781-4.414062-10.8125-.339843-15.082031 4.074218-4.265625 10.835937-4.4375 15.082031-.339844 4.308593 4.117187 9.238281 7.464844 14.65625 9.917969 5.355469 2.457031 7.703125 8.769531 5.269531 14.144531-1.792969 3.925781-5.675781 6.230469-9.726562 6.230469zm87.125-37.289063c-1.152344 0-2.328126-.195312-3.5-.578125-5.566407-1.917968-8.511719-8-6.59375-13.566406 1.941406-5.589844 2.925781-11.457031 2.925781-17.453125 0-5.117187-.707031-10.175781-2.132813-15.015625-1.664062-5.65625 1.578125-11.5625 7.230469-13.25 5.71875-1.640625 11.582031 1.601562 13.246094 7.234375C510.996094 57.871094 512 64.953125 512 72.101562c0 8.363282-1.367188 16.574219-4.074219 24.40625-1.535156 4.414063-5.675781 7.167969-10.089843 7.167969zM373.953125 91.835938c-5.226563 0-9.773437-3.839844-10.5625-9.152344-.488281-3.480469-.722656-7.019532-.722656-10.625 0-4.820313.445312-9.535156 1.34375-14.121094 1.109375-5.761719 6.65625-9.515625 12.5-8.449219 5.78125 1.109375 9.558593 6.699219 8.449219 12.5C384.339844 65.253906 384 68.625 384 72.078125c0 2.605469.171875 5.121094.535156 7.574219.832032 5.824218-3.203125 11.242187-9.046875 12.074218-.511719.085938-1.023437.109376-1.535156.109376zm21.480469-57.453126c-2.984375 0-5.949219-1.257812-8.0625-3.691406-3.863282-4.4375-3.371094-11.175781 1.066406-15.039062 6.292969-5.460938 13.417969-9.792969 21.121094-12.882813 5.4375-2.21875 11.6875.445313 13.867187 5.90625 2.195313 5.460938-.449219 11.691407-5.910156 13.867188-5.527344 2.21875-10.605469 5.332031-15.125 9.238281-1.984375 1.75-4.480469 2.601562-6.957031 2.601562zm79.019531-3.773437c-2.15625 0-4.308594-.640625-6.1875-1.984375-4.839844-3.457031-10.195313-6.058594-15.890625-7.722656-5.65625-1.664063-8.898438-7.574219-7.234375-13.25 1.664063-5.652344 7.550781-8.851563 13.25-7.230469 8 2.347656 15.507813 5.992187 22.292969 10.859375 4.800781 3.433594 5.910156 10.089844 2.472656 14.867188-2.109375 2.902343-5.375 4.460937-8.703125 4.460937zm0 0"/>
        <path d="M106.667969 306.746094c-.832031 0-1.664063-.105469-2.519531-.296875-5.738282-1.367188-9.257813-7.148438-7.871094-12.886719 1.664062-6.914062 4.585937-14.398438 8.703125-22.230469 2.730469-5.203125 9.21875-7.273437 14.402343-4.5 5.226563 2.730469 7.230469 9.171875 4.5 14.398438-3.285156 6.292969-5.609374 12.117187-6.847656 17.324219-1.171875 4.90625-5.546875 8.191406-10.367187 8.191406zM138.515625 251.75c-2.367187 0-4.777344-.789062-6.738281-2.410156-4.566406-3.734375-5.226563-10.453125-1.496094-15.019532 4.480469-5.460937 9.324219-11.007812 14.464844-16.578124 4.011718-4.328126 10.730468-4.585938 15.082031-.597657 4.332031 4.011719 4.585937 10.753907.597656 15.085938-4.863281 5.246093-9.40625 10.453125-13.632812 15.613281-2.132813 2.582031-5.183594 3.90625-8.277344 3.90625zm44.355469-46.1875c-2.882813 0-5.761719-1.152344-7.851563-3.457031-3.988281-4.328125-3.691406-11.09375.640625-15.082031 5.289063-4.863282 10.707032-9.683594 16.253906-14.421876 4.460938-3.796874 11.179688-3.304687 15.039063 1.175782 3.839844 4.457031 3.308594 11.199218-1.171875 15.039062-5.332031 4.585938-10.601562 9.238282-15.679688 13.929688-2.070312 1.878906-4.652343 2.816406-7.230468 2.816406zm49.300781-40.980469c-3.222656 0-6.421875-1.453125-8.511719-4.246093-3.5625-4.695313-2.625-11.390626 2.089844-14.933594 5.800781-4.394532 11.648438-8.660156 17.515625-12.820313 4.796875-3.394531 11.453125-2.261719 14.867187 2.558594 3.414063 4.800781 2.261719 11.457031-2.558593 14.871094-5.675781 4.007812-11.351563 8.148437-16.980469 12.414062-1.921875 1.472657-4.183594 2.15625-6.421875 2.15625zm52.949219-36.054687c-3.605469 0-7.125-1.835938-9.132813-5.140625-3.050781-5.035157-1.429687-11.585938 3.605469-14.65625 6.421875-3.902344 12.757812-7.550781 18.964844-10.902344 5.183594-2.792969 11.671875-.894531 14.464844 4.289063 2.816406 5.183593.898437 11.648437-4.289063 14.464843-5.90625 3.199219-11.945313 6.675781-18.089844 10.386719-1.75 1.046875-3.648437 1.558594-5.523437 1.558594zm57.300781-28.5c-4.375 0-8.46875-2.710938-10.046875-7.0625-1.984375-5.546875.894531-11.648438 6.441406-13.652344 8.148438-2.921875 15.679688-4.972656 22.378906-6.125 5.757813-.980469 11.304688 2.925781 12.308594 8.75.980469 5.800781-2.921875 11.304688-8.746094 12.308594-5.460937.917968-11.777343 2.664062-18.730468 5.160156-1.195313.40625-2.410156.621094-3.605469.621094zm0 0"/>
      </svg>
      <div class="info-text">Drag an image to upload</div>
    </div>
  </div>
</div> */}

              {/* <form class="box" method="post" action="" enctype="multipart/form-data">
                <div class="box__input">
                  <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                  <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                  <p></p>
                  <button class="axil-btn btn-fill-white btn-large" type="submit">Upload Thumbnail</button>
                  
                  
                    <Link
                to={process.env.PUBLIC_URL + "/project-grid-one"}
                className="axil-btn btn-fill-white btn-large"
              >
                Upload Thumbnail
              </Link>
                </div>
                
                <div class="box__uploading">Uploading…</div>
                <div class="box__success">Done!</div>
                <div class="box__error">Error! <span></span>.</div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-18">
        <li className="shape shape-1">
          <AnimationOnScroll
            animateIn="slideInRight"
            duration={1}
            animateOnce={true}
            delay={100}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/banner/ytl6.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
        <li className="shape shape-2">
          {/* <AnimationOnScroll
            animateIn="slideInLeft"
            duration={1}
            animateOnce={true}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/banner/banner-shape-2.png"}
              alt="Shape"
            />
          </AnimationOnScroll> */}
        </li>
        <li className="shape shape-3">
          <AnimationOnScroll
            animateIn="zoomIn"
            duration={1}
            animateOnce={true}
            delay={500}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
        <li className="shape shape-4">
          <AnimationOnScroll
            animateIn="zoomIn"
            duration={1}
            animateOnce={true}
            delay={500}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
        <li className="shape shape-5">
          <AnimationOnScroll
            animateIn="zoomIn"
            duration={1}
            animateOnce={true}
            delay={500}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
        <li className="shape shape-6">
          <AnimationOnScroll
            animateIn="zoomIn"
            duration={1}
            animateOnce={true}
            delay={500}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
        <li className="shape shape-7">
          <AnimationOnScroll
            animateIn="slideInDown"
            duration={1}
            animateOnce={true}
            delay={500}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-26.png"}
              alt="Shape"
            />
          </AnimationOnScroll>
        </li>
      </ul>
    </div>
  );
};

export default BannerTwo;
