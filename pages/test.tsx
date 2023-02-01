
interface OwnProps {}

type Props = OwnProps;

function test(){

  return(
    <div id="links">
      <div className="white-link">
        <a href="">Click here to open documentation</a>
      </div>
      <div className="blue-link">
        <a href="">Click here to open documentation</a>
      </div>
      <div className="white-link-underlined">
        <a href="">Click here to open documentation</a>
      </div>
      <div className="blue-link-underlined">
        <a href="">Click here to open documentation</a>
      </div>
      <div className="arrow-white-link">
        <a href="">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M5 9L1 5L5 9ZM1 5L5 1L1 5Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Click here to open documentation</a>
      </div>
      <div className="arrow-blue-link">
        <a href="">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M5 9L1 5L5 9ZM1 5L5 1L1 5Z" stroke="#0EA5E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <span className="link-text">Click here to open documentation</span></a>
      </div>
      <div className="arrow-white-link-underlined">
        <a href="">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M5 9L1 5L5 9ZM1 5L5 1L1 5Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Click here to open documentation</a>
      </div>
      <div className="arrow-blue-link-underlined">
        <a href="">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M5 9L1 5L5 9ZM1 5L5 1L1 5Z" stroke="#0EA5E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Click here to open documentation</a>
      </div>

    <div id="tooltip">
        
        <div className="tooltip-body">
            <span>Tooltip Example</span>
        </div>

        <div className="tooltip-body">
            <span className="tooltip-text" id="tooltip-text-top">Tooltip Example</span>
        </div>

        <div className="tooltip-body">
            <span className="tooltip-text" id="tooltip-text-bottom">Tooltip Example</span>
        </div>

        <div className="tooltip-body">
            <span className="tooltip-text" id="tooltip-text-left">Tooltip Example</span>
        </div>

        <div className="tooltip-body">
            <span className="tooltip-text" id="tooltip-text-right">Tooltip Example</span>
        </div>

    <div id="breadcrumb">

        <div className="icon-home-breadcrumb">
                <svg width="10.5" height="10.5" viewBox="0 0 10.5 10.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16l3.111-3.111M5.111 12.889l10.889-10.889 10.889 10.889M5.111 12.889v15.556c0 0.413 0.164 0.808 0.456 1.1s0.687 0.456 1.1 0.456h4.667M26.889 12.889l3.111 3.111M26.889 12.889v15.556c0 0.413-0.164 0.808-0.456 1.1s-0.687 0.456-1.1 0.456h-4.667M11.333 30c0.413 0 0.808-0.164 1.1-0.456s0.456-0.687 0.456-1.1v-6.222c0-0.413 0.164-0.808 0.456-1.1s0.687-0.456 1.1-0.456h3.111c0.413 0 0.808 0.164 1.1 0.456s0.456 0.687 0.456 1.1v6.222c0 0.413 0.164 0.808 0.456 1.1s0.687 0.456 1.1 0.456M11.333 30h9.333" stroke="#d4d4d4" stroke-width="3.1111" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>

        <div className="home-breadcrumb">
            <a href="">Home</a>
        </div>

        <div className="chevron-right-breadcrumb">
                <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.2 3.2l12.8 12.8-12.8 12.8" stroke="#d4d4d4" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>

        <div className="h-breadcrumb">
            <a href="">h</a>
        </div>

        <div className="chevron-right-breadcrumb">
                <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.2 3.2l12.8 12.8-12.8 12.8" stroke="#d4d4d4" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>

        <div className="breadcrumb">
            <a href="">Breadcrumb</a>
        </div>
    </div>
    </div>
    </div>
        );
}

export default test;
