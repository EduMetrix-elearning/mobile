import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import style from '../Stylesheets/PrivacyStyle'

class Privacy extends Component {


    loginHandle = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView style={style.SafeAreaView}>
                <View style={style.HeaderView}>
                    <View style={style.logoView}>
                        <View style={style.companyLogo}>
                            <Image source={require('../Assets/logo.png')} style={style.logo} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center" }}>
                            <Text style={style.edumetrixText}>Edumetrix</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.loginHandle}>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={style.edumetrixText}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.mainContainerView}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={style.privacyHeading}>Privacy Policy</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We value your trust. In order to honour that trust, EDUMETRIX.IO adheres to ethical standards in gathering, using, and safeguarding any information you provide.EduMetrix.io is a leading edtech company, for imparting learning.This privacy policy governs your use of the application ‘EduMetrix (“Application”), www. EduMetrix.io.com (“Website”) and the other associated applications, products, websites and services managed by the Company.
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                Please read this privacy policy carefully before using the Application, Website, our services and products, along with the Terms of Use provided on the Application and the Website. Your use of the Website, Application, or services in connection with the Application, Website or products or registrations with us through usage of any products shall signify your acceptance of this Policy and your agreement to be legally bound by the same.If you do not agree with the terms of this Policy, do not use the Website, Application our products or avail any of our Services.                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>User Provided Information</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                The Application/Website obtains the information you provide when you download and register for the Application. When you register with us, you generally provide (a) your name, email address, location, phone number, College details and password; (b) transaction-related information, such as your bank account details to receive your earnings or salary from us; (c) information you provide us when you contact us for help; (d) information you enter into our system when using the Application/Services, such as while asking doubts, participating in discussions. The said information collected from the users could be categorized as “Personal Information”, “Sensitive Personal Information” and “Associated Information”. Personal Information, Sensitive Personal Information and Associated Information (each as individually defined under this Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 (the “Data Protection Rules”)) shall collectively be referred to as “Information” in this Policy.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We may use the Information to contact you from time to time, to provide you with the Services, important information, required notices and marketing promotions. We will ask you when we need more information that personally identifies you (personal information) or allows us to contact you.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We will, at all times, provide the option to you to not provide the Personal Information or Sensitive Personal Information, which we seek from you. Further, you shall, at any time while using the Application/Services, also have an option to change your consent given earlier to us to use such Personal Information or Sensitive Personal Information. Such change of the consent is required to be sent request in my profile. Profile settings                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Automatically Collected Information</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                In addition, the Application/products/Services may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application/Services. As is true of most Mobile applications, we also collect other relevant information as per the permissions that you provide.
                            </Text>
                        </View>
                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Use of your Personal Information</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We use the collected Information to analyse trends, to conduct research, to administer the Application/Services, to learn about each user’s usage patterns and movements around the Application and Services and to gather demographic information and usage behaviour about our user base as a whole. Aggregated and individual, anonymized and non-anonymized data may periodically be transmitted to external service providers to help us improve the Application, products and our Services. We will share your information with third parties only in the ways that are described below in this Policy.                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We may use the individual data and behavior patterns combined with personal information to provide you with personalized content, and better your learning objectives. Third parties provide certain services which we may use to analyze the data and information to personalize, drive insights and help us better your experience or reach out to you with more value added applications, information and services. However, these third party companies do not have any independent right to share this information. We do not sell, trade or rent your Information to any third party unless, we have been expressly authorized by you either in writing or electronically to do so. We may at times provide aggregate statistics about our customers, traffic patterns, and related site information to reputable third parties, however this information when disclosed will be in an aggregate form and does not contain any of your Personally Identifiable Information.
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                EduMetrix will occasionally send email notices or contact you to communicate about our Services and updates, as they are considered an essential part of the Services
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We may disclose Information:
                        </Text>
                        </View>

                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>As required by law, such as to comply with a subpoena, or similar legal process;</Text>
                            </View>
                        </View>

                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>To enforce applicable ToU, including investigation of potential violations thereof;</Text>
                            </View>
                        </View>

                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, address security or technical issues or respond to a government request;</Text>
                            </View>
                        </View>

                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>With our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this Policy;</Text>
                            </View>
                        </View>
                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>
                                    To protect against imminent harm to the rights, property or safety of the Application/Website/ EduMetrix.io or its users or the public as required or permitted by law;
                                </Text>
                            </View>
                        </View>

                        <View style={style.subview}>
                            <View style={style.dotView} />
                            <View style={{ marginLeft: 10, paddingRight: 5 }}>
                                <Text style={style.aboutUsText}>
                                    With third party service providers in order to personalize the Application/Website for a better user experience and to perform behavioural analysis;
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                Any portion of the Information containing personal data relating to minors provided by you shall be deemed to be given with the consent of the minor’s legal guardian. Such consent is deemed to be provided by your registration with us.                            </Text>
                        </View>
                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Access to your Personal Information</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We will provide you with the means to ensure that your Personal Information is correct and current. If you have filled out a user profile, we will provide an obvious way for you to access and change your profile from our Application/ Website. We adopt reasonable security measures to protect your password from being exposed or disclosed to anyone.
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Cookies</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We send cookies (small files containing a string of characters) to your computer, thereby uniquely identifying your browser. Cookies are used to track your preferences, help you login faster, and aggregated to determine user trends. This data is used to improve our offerings, such as providing more content in areas of greater interest to a majority of users.                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                Most browsers are initially set up to accept cookies, but you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. Some of our features and services may not function properly if your cookies are disabled.
                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Links</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We may present links in a format that enables us to keep track of whether these links have been followed. We use this information to improve our customized content. Clicking on links may take you to sites outside our domain. We are not responsible for the privacy practices of other web sites. We encourage our users to be aware when they leave our site to read the privacy statements of each and every web site that collects personally identifiable information. This Privacy Policy applies solely to information collected by our Website.                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Alerts</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We may alert you by email or phone to inform you about new service offerings or other information which we feel might be useful for you.
                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Public Forums</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                When you use certain features on our website like the discussion forums and you post or share your personal information such as comments, messages, files, photos, will be available to all users, and will be in the public domain. All such sharing of information is done at your own risk. Please keep in mind that if you disclose personal information in your profile or when posting on our forums this information may become publicly available.                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Security</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                We are concerned about safeguarding the confidentiality of your Information. We provide physical, electronic, and procedural safeguards to protect Information we process and maintain. For example, we limit access to this Information to authorized employees only who need to know that information in order to operate, develop or improve our Application/Services/Website. Please be aware that, although we endeavour to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>How Long Do We Retain User Data?</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                Currently, we plan to retain user data while an account is active and for at least five years afterward. We may alter this practice according to legal and business requirements. For example, we may lengthen the retention period for some data if needed to comply with law or voluntary codes of conduct. Unless otherwise prohibited, we may shorten the retention period for some types of data if needed to free up storage space.                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Log information</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                When you access our Website, our servers automatically record information that your browser sends whenever you visit a website. These server logs may include information such as your web request, internet protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.
                            </Text>
                        </View>
                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>User communications</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                                When you send an email or other communication to us, we may retain those communications in order to process your inquiries, respond to your requests and improve our Services.                            </Text>
                        </View>

                        {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Changes to this Statement
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                            As the Company evolves, our privacy policy will need to evolve as well to cover new situations. You are advised to review this Policy regularly for any changes, as continued use is deemed approval of all changes.
                            </Text>                   
                         </View>

                          {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Your Consent
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}>
                            We believe that, every user of our Application/Services/Website must be in a position to provide an informed consent prior to providing any Information required for the use of the Application/Services/Website. By registering with us, you are expressly consenting to our collection, processing, storing, disclosing and handling of your information as set forth in this Policy now and as amended by us. Processing, your information in any way, including, but not limited to, collecting, storing, deleting, using, combining, sharing, transferring and disclosing information, all of which activities will take place worldwide.                            </Text>                   
                         </View>
                           {/* sub heading */}
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.subHeading}>Contact Information
                            </Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={style.aboutUsText}> Reach out to us on support@eduemtrix.io, in case of any queries.</Text>      
                       </View>

                    </ScrollView>

                </View>


                <View style={style.bottomHeading}>
                    <Text>Edumetrix © 2019</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Privacy