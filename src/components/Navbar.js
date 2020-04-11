import React from 'react';



function Navbar() {
  return (
    <div className="Navbar">
      <header id="home" class="welcome-hero-area">
    <div class="header-top-area">
        <div class="container header-container">
            <div class="row">
                <div class="col-md-3 col-xs-6">
                    
                    <div class="logo">
                        <a href="index.html"><img src="assets/img/logo.png" class="img-responsive" alt="Cymetrix Software" /></a>
                    </div>
                    
                </div>
                <div class="col-md-9 col-xs-6">
                    
                    <div class="mainmenu">
                        <div class="navbar navbar-nobg">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="navbar-collapse collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li class=""><a class="smoth-scroll>
                                            ?>" href="index">home</a>
                                    </li>

                                    <li class="">

                                        <a class="" href="javascript:void(0)">about</a>
                                        <div class="dropdown">
                                            <div class="dropdown_menu">
                                                <div class="dropdown_menu-item">
                                                    <a href="about.html">Company</a>
                                                </div>
                                                <div class="dropdown_menu-item">
                                                    <a href="casestudies.html">Case Studies</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="" href="javascript:void(0)">services</a>
                                        <div class="dropdown">
                                            <div class="dropdown_menu">
                                                <div class="dropdown_menu-item">
                                                    <a href="salesforce-consulting-services-company.html">
                                                            Salesforce Consulting
                                                        </a>
                                                </div>
                                                <div class="dropdown_menu-item">
                                                    <a href="mulesoft-services.html">MuleSoft Consulting</a>
                                                </div>
                                                <div class="dropdown_menu-item">
                                                    <a href="spend-analysis.html">Spend Analysis</a>
                                                </div>
                                                <div class="dropdown_menu-item">
                                                    <a href="information-security-services.html">IT Security</a>
                                                </div>
                                                <div class="dropdown_menu-item">
                                                    <a href="looker-consulting.html">Looker consulting</a>
                                                </div>

                                                <div class="dropdown_menu-item">
                                                    <a href="salesforce-training.html">Salesforce Training</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a class="" href="cymetrix-calendarinsight.html">products</a>
                                    </li>
                                    <li><a class="" href="https://www.cymetrixsoft.com/blog/">blog</a>
                                    </li>
                                    <li><a class="" href="contact-us.html">contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
  );
}

export default Navbar;