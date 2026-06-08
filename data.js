// =========================================================================
// TÀI LIỆU DỮ LIỆU HỆ THỐNG - HOANG VINH PORTFOLIO
// Định hướng: Data-Driven Performance Marketing
// =========================================================================

const portfolioData = {
    profile: {
        name: "Hoàng Vĩnh",
        title: "Data-Driven Performance Marketing | Building Toward User Acquisition",
        email: "vinhpham071@gmail.com",
        phone: "+84 935 736 964",
        stats: {
            months: 12,
            projects: 4,
            dataDriven: 100
        }
    },

    educationAndCerts: {
        edu: {
            major: { vi: "Cử nhân Kinh tế Đối ngoại", en: "Bachelor of International Business" },
            school: { vi: "Đại học Ngoại Thương (FTU HCMC)", en: "Foreign Trade University (FTU HCMC)" },
            gpa: "7.39 / 10.0",
            desc: { 
                vi: "Nền tảng vững chắc về kinh tế quốc tế, logic kinh doanh và khả năng phân tích dữ liệu ứng dụng trong môi trường đa văn hóa.", 
                en: "Solid foundation in international economics, business logic, and practical data analysis adapted for multicultural environments." 
            },
            status: { vi: "Đã tốt nghiệp", en: "Graduated" }
        },
        
        certGroups: [
            {
                groupTitle: { vi: "Google AI", en: "Google AI" },
                certs: [
                    {
                        title: { vi: "AI Fundamentals", en: "AI Fundamentals" },
                        org: "Google Career Certificates (Coursera)",
                        date: { vi: "Tháng 06/2026", en: "Jun 2026" },
                        img: "", 
                        pdf: "Coursera AM2L8D565EE8.pdf", 
                        verifyUrl: "https://coursera.org/verify/AM2L8D565EE8"
                    }
                ]
            },
            {
                groupTitle: { vi: "Digital Marketing & E-commerce", en: "Digital Marketing & E-commerce" },
                certs: [
                    {
                        title: { vi: "Foundations of Digital Marketing & E-commerce", en: "Foundations of Digital Marketing & E-commerce" },
                        org: "Google Career Certificates (Coursera)",
                        date: { vi: "Tháng 11/2025", en: "Nov 2025" },
                        img: "", 
                        pdf: "Coursera 73X9MDRFTS43.pdf", 
                        verifyUrl: "https://coursera.org/verify/73X9MDRFTS43"
                    }
                ]
            }
        ]
    },

    projects: {
        thuedotkich: {
            title: "Thuê Đột Kích - UA Strategy",
            tags: ["Lead Generation", "Meta Ads", "Google Ads"],
            shortDesc: { 
                vi: "Trực tiếp lên chiến dịch Meta Lead Generation nhắm mục tiêu chuẩn xác, thu hút tập game thủ có nhu cầu trải nghiệm tài khoản VIP.", 
                en: "Built and managed Meta Lead Generation campaigns targeting gamers seeking short-term VIP experiences." 
            },
            role: { 
                vi: "Xây dựng và quản lý chiến dịch Meta Lead Gen, thiết lập quảng cáo, nhắm mục tiêu, tối ưu form và theo dõi chỉ số.", 
                en: "Built and managed Meta Lead Gen campaigns (setup, targeting, lead form creation, performance monitoring)." 
            },
            context: { 
                vi: "Dịch vụ thuê account cần tiếp cận tập game thủ có mong muốn trải nghiệm ngay tính năng VIP ngắn hạn mà không có thời gian cày cuốc.", 
                en: "The gaming account rental service needed to efficiently acquire gamers seeking short-term VIP accounts." 
            },
            strategy: { 
                vi: "Phân bổ ngân sách: Google Search (6.5M VNĐ/tháng) đón ý định tìm kiếm, Meta Ads (3.5M VNĐ/tháng) tạo Lead Form nhắm trúng pain-point.", 
                en: "Budget split: Google Search (6.5M VND/mo) for high intent, Meta Ads (3.5M VND/mo) for targeted Lead Generation." 
            },
            impact: { 
                vi: "Ghi nhận 360 Clicks với CTR 6.77%. Đạt mức CPC trung bình ~2,110 VNĐ nhờ tối ưu hóa liên tục.", 
                en: "Generated 360 clicks with a 6.77% CTR. Maintained an efficient average CPC of ~2,110 VND." 
            },
            gallery: ["thuedotkich-1.png", "thuedotkich-2.png"]
        },
        trustingsocial: {
            title: "Trusting Social - Data Labelling & Operations",
            tags: ["Data Operations", "QA", "Workflow"],
            shortDesc: { 
                vi: "Điều phối quy trình xử lý và quản lý chất lượng dữ liệu Machine Learning (OCR) phục vụ cho mô hình AI.", 
                en: "Managed ML data labeling workflows and output quality control in collaboration with Data Scientists." 
            },
            role: { vi: "Data Labelling & Operations", en: "Data Labelling & Operations" },
            context: { 
                vi: "Mô hình Machine Learning đòi hỏi nguồn dữ liệu huấn luyện (training data) khổng lồ, chuẩn xác, đặc biệt là OCR.", 
                en: "Machine Learning models required vast, highly accurate training datasets, specifically for OCR." 
            },
            strategy: { 
                vi: "Làm việc với Data Scientist để nắm rõ yêu cầu nghiệp vụ, chuyển hóa thành hướng dẫn gán nhãn chi tiết cho đội ngũ, trực tiếp làm QA.", 
                en: "Worked with Data Scientists to understand specs, created labeling guidelines, performed QA, and tracked delivery." 
            },
            impact: { 
                vi: "Đảm bảo tính đồng bộ, thông suốt trong giao tiếp giữa đội kỹ thuật và đội vận hành dữ liệu, giúp dự án hoàn thành đúng hạn.", 
                en: "Maintained seamless communication flows between technical and labeling teams, ensuring on-time delivery of datasets." 
            },
            gallery: []
        },
        hungphat: {
            title: "Thép Hùng Phát - Technical SEO",
            tags: ["SEO", "Organic Growth"],
            shortDesc: { 
                vi: "Đóng góp vào nỗ lực tối ưu SEO và xây dựng Topic Cluster chuyên sâu, thúc đẩy tăng trưởng click tự nhiên.", 
                en: "Contributed to SEO content preparation and structured Topic Clusters, driving organic growth." 
            },
            role: { vi: "Hỗ trợ SEO Content", en: "SEO Content Support" },
            context: { 
                vi: "Thị trường thép B2B cạnh tranh từ khóa ngách gắt gao. Khách hàng cần thông số kỹ thuật chuẩn xác trước khi mua hàng.", 
                en: "Fierce B2B steel market competition. Buyers require high-precision technical data sheets before inquiring." 
            },
            strategy: { 
                vi: "Phối hợp cùng SEO Leader xây dựng Topic Cluster. Trực tiếp biên tập On-page và chuẩn hóa các bảng thông số trọng lượng thép.", 
                en: "Collaborated with the SEO lead on Topic Clusters. Optimized on-page elements and technical specification tables." 
            },
            impact: { 
                vi: "Đóng góp vào nỗ lực SEO chung giúp website đạt hơn 94.700 lượt nhấp, 2.88 triệu hiển thị với CTR 3.3% trên Google Search Console.", 
                en: "Contributed to SEO efforts driving 94.7K clicks and 2.88M impressions with a 3.3% CTR on Google Search Console." 
            },
            gallery: ["gsc-screenshot.png"]
        },
        netsolutions: {
            title: "Net Solutions - B2B Lead Gen",
            tags: ["Digital Marketing", "B2B"],
            shortDesc: { 
                vi: "Hỗ trợ thiết lập, giám sát chiến dịch Meta Ads tìm kiếm khách hàng doanh nghiệp cho phần mềm bảo vệ ngân sách.", 
                en: "Supported Meta Ads setup and tracking for B2B lead generation targeting anti-click fraud software." 
            },
            role: { vi: "Thực tập sinh Digital Marketing", en: "Digital Marketing Intern" },
            context: { 
                vi: "Tìm kiếm tệp khách hàng B2B có nhu cầu sử dụng phần mềm chống click ảo để tối ưu ngân sách quảng cáo.", 
                en: "Needed to acquire high-quality B2B leads for anti-click fraud software." 
            },
            strategy: { 
                vi: "Hỗ trợ lên chiến dịch chuyển đổi (Lead Form) trên Meta Ads, viết kịch bản đánh thẳng vào nỗi đau lãng phí ngân sách.", 
                en: "Assisted in setting up Lead Form campaigns. Drafted high-intent ad copies targeting budget-wasting pain points." 
            },
            impact: { 
                vi: "Thu thập dữ liệu chuyển đổi thực tế qua A/B testing, làm cơ sở báo cáo hiệu suất chiến dịch cho toàn team.", 
                en: "Systematically tracked conversion data via A/B testing to help the team optimize overall performance." 
            },
            gallery: []
        }
    },

    // ĐÃ ĐỒNG BỘ: Đổi hoàn toàn từ growthAnalysis sang blogAnalysis
    blogAnalysis: {
        title: { vi: "Góc Chia Sẻ & Phân Tích", en: "Blog & Analysis" },
        featuredArticle: {
            title: { 
                vi: "UA Marketer học được gì từ mô hình tăng trưởng của Honkai: Star Rail?", 
                en: "What UA Marketers Can Learn From Honkai: Star Rail's Growth Model" 
            },
            sourceUrl: "https://www.blog.udonis.co/mobile-marketing/mobile-games/honkai-star-rail-player-count",
            pdfPath: "hsr-analysis.pdf", 
            takeaways: [
                {
                    concept: "Pity System",
                    metric: "Conversion Psychology",
                    desc: {
                        vi: "Ứng dụng tâm lý học hành vi biến sự 'may rủi' thành mục tiêu tính toán được, kích thích vòng lặp chuyển đổi (conversion loops).",
                        en: "Leverages behavioral psychology to turn luck into a calculated goal, driving continuous conversion loops."
                    }
                },
                {
                    concept: "Monthly Pass",
                    metric: "Retention Tool",
                    desc: {
                        vi: "Neo giữ thói quen đăng nhập hàng ngày (Daily Habit) qua giá trị tích lũy vượt trội, tối ưu tỷ lệ giữ chân (Retention).",
                        en: "Establishes a daily log-in habit by offering outsized continuous value, locking in long-term user retention."
                    }
                },
                {
                    concept: "Battle Pass",
                    metric: "F2P to Low Spender",
                    desc: {
                        vi: "Tạo dải phần thưởng mượt mà, biến người chơi miễn phí (F2P) thành người dùng trả phí thấp tự nhiên dựa trên tương tác.",
                        en: "Smoothes the monetization bridge, naturally converting F2P users into low spenders based on pure engagement."
                    }
                },
                {
                    concept: "Eidolon System",
                    metric: "Whale Monetization",
                    desc: {
                        vi: "Cơ chế tăng sức mạnh cấp số nhân nhờ trùng lặp vật phẩm, tối ưu doanh thu từ tệp người dùng chi tiêu cao (Whales).",
                        en: "Maximizes deep monetization from high-value users (Whales) through duplicate item power scaling metrics."
                    }
                }
            ]
        }
    }
};
