// =========================================================================
// TÀI LIỆU DỮ LIỆU HỆ THỐNG - HOANG VINH PORTFOLIO
// Bạn chỉ cần chỉnh sửa nội dung trong file này, website sẽ tự động cập nhật.
// =========================================================================

const portfolioData = {
    // 1. Thông tin cá nhân & Số liệu thống kê ở mục About
    profile: {
        name: "Hoàng Vĩnh",
        title: "Data-Driven UA Marketer | Mobile App & Game",
        email: "vinhpham071@gmail.com",
        phone: "+84 935 736 964",
        stats: {
            months: 12,    // Số tháng thực chiến
            projects: 4,   // Số dự án mũi nhọn
            dataDriven: 100 // % định hướng data
        }
    },

    // 2. Dữ liệu mục Học vấn & Chứng chỉ
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
        cert: {
            title: { vi: "Foundations of Digital Marketing & E-commerce", en: "Foundations of Digital Marketing & E-commerce" },
            org: { vi: "Google Career Certificates (Coursera)", en: "Google Career Certificates (Coursera)" },
            date: { vi: "Chứng nhận hợp lệ (11/2025)", en: "Verified (Nov 2025)" },
            verifyUrl: "https://coursera.org/verify/73X9MDRFTS43"
        }
    },

    // 3. Dữ liệu chi tiết 4 dự án (Gồm text + số liệu vẽ biểu đồ tự động)
    projects: {
        trustingsocial: {
            title: "Trusting Social - Data Operations",
            tags: ["Task Owner", "Machine Learning Data", "QA"],
            shortDesc: {
                vi: "Đảm nhiệm vai trò Task Owner xử lý dữ liệu Machine Learning (OCR). Trực tiếp làm việc với Data Scientist để tối ưu luồng công việc cho team.",
                en: "Acted as a Task Owner for ML data labeling (OCR). Collaborated with Data Scientists to optimize workflows."
            },
            role: { vi: "Task Owner / Data Labeller", en: "Task Owner / QA" },
            context: {
                vi: "Mô hình Machine Learning cần nguồn dữ liệu huấn luyện khổng lồ và chính xác cao, đặc biệt trong các tác vụ nhận dạng ký tự quang học (OCR) và xây dựng bộ dữ liệu đa đích (multi-purpose).",
                en: "Machine Learning models required vast, highly accurate training datasets, specifically for Optical Character Recognition (OCR) and multi-purpose AI tasks."
            },
            strategy: {
                vi: "Được tin tưởng giao vai trò Task Owner. Trực tiếp làm việc với Data Scientist để hiểu sâu về yêu cầu cốt lõi, sau đó truyền đạt lại hướng dẫn cho đội ngũ gán nhãn. Quản lý chất lượng đầu ra (QA) và báo cáo với tư duy của một Product Owner.",
                en: "Trusted with the Task Owner role. Collaborated directly with Data Scientists to grasp core requirements, then delivered guidelines to the labeling team. Managed QA and reported with a Product Owner mindset."
            },
            impact: {
                vi: "Đảm bảo chất lượng dữ liệu đầu ra đạt chuẩn khắt khe với tỷ lệ QA Pass rate lên đến 98%. Sự nhịp nhàng trong việc tối ưu hóa luồng giao tiếp giữa team Data và team Labeling đã góp phần giúp mô hình AI tăng 15% hiệu suất.",
                en: "Maintained a strict QA Pass rate of 98%. Streamlining the communication flow between Data and Labeling teams directly contributed to a 15% boost in AI model performance."
            },
            chart: {
                type: 'doughnut',
                labels: { vi: ['QA Pass (98%)', 'Needs Review (2%)'], en: ['QA Pass (98%)', 'Needs Review (2%)'] },
                data: [98, 2],
                colors: ['#10b981', '#ef4444'],
                title: { vi: 'Tỷ lệ chính xác dữ liệu (QA Rate)', en: 'Data QA Accuracy Rate' }
            }
        },
        netsolutions: {
            title: "Net Solutions - B2B Lead Gen",
            tags: ["Meta Ads", "B2B Conversion"],
            shortDesc: {
                vi: "Hỗ trợ thiết lập Meta Ads tìm kiếm Lead mảng doanh nghiệp (B2B) cho phần mềm công nghệ bảo vệ ngân sách quảng cáo.",
                en: "Supported Meta Ads setup for B2B lead generation targeting anti-click fraud software."
            },
            role: { vi: "Hỗ trợ chạy Ads", en: "Ads Assistant" },
            context: {
                vi: "Agency cần tìm kiếm tệp khách hàng B2B (doanh nghiệp) cho dịch vụ phần mềm chống click ảo (NS Ads Xperts) nhằm bảo vệ ngân sách quảng cáo cho đối tác.",
                en: "The agency needed to acquire B2B leads for its complex anti-click fraud software."
            },
            strategy: {
                vi: "Trực tiếp hỗ trợ thiết lập chiến dịch chuyển đổi (Lead Form) trên Meta Ads. Lên nháp kịch bản và thông điệp quảng cáo 'Giảm 50% Chi Phí Google Ads Ngay' để đánh trúng pain-point lãng phí ngân sách của các chủ doanh nghiệp.",
                en: "Assisted in setting up Lead Generation campaigns on Meta Ads. Drafted ad copy targeting the pain point of 'wasted ad budgets'."
            },
            impact: {
                vi: "Tối ưu hóa ngân sách xuất sắc: Chỉ với ngân sách thử nghiệm ~1,5 triệu VNĐ, chiến dịch do team triển khai đã tiếp cận 23.400+ người, mang về 27 Leads B2B chất lượng với CPA cực tốt ~56.500 VNĐ/Lead.",
                en: "With a $60 test budget, the team's campaign generated 27 high-quality B2B leads at an excellent CPA of ~56,500 VND."
            },
            chart: {
                type: 'bar',
                labels: { vi: ['Reach (x1k)', 'Impressions (x1k)', 'Leads'], en: ['Reach (x1k)', 'Impressions (x1k)', 'Leads'] },
                data: [23.4, 34.8, 27],
                colors: ['#0ea5e9', '#0ea5e9', '#0ea5e9'],
                title: { vi: 'Hiệu suất Meta Ads B2B', en: 'Meta Ads B2B Performance' }
            }
        },
        thuedotkich: {
            title: "Thuê Đột Kích - UA Strategy",
            tags: ["Google Ads", "Meta Ads"],
            shortDesc: {
                vi: "Tham gia hỗ trợ phân bổ ngân sách Omnichannel cho dịch vụ Game VIP. Đón lõng nhu cầu Intent Capture trên Search.",
                en: "Assisted in cross-channel budget allocation for a VIP Gaming service, optimizing Search CPC."
            },
            role: { vi: "Hỗ trợ Performance Marketing", en: "Performance Marketing Assistant" },
            context: {
                vi: "Dịch vụ thuê account Đột Kích cần thu hút tập game thủ có nhu cầu trải nghiệm VIP ngắn hạn mà không cần cày cuốc.",
                en: "A Crossfire account rental service needed to acquire gamers seeking short-term VIP experiences."
            },
            strategy: {
                vi: "Dưới sự hướng dẫn của quản lý, tôi hỗ trợ theo dõi chiến lược phân bổ: 65% ngân sách Push (Google Search) và 35% Remarketing (Meta Ads). Theo dõi chỉ số hàng ngày để tạo báo cáo tối ưu.",
                en: "Guided by senior management, I assisted in tracking the budget split: 65% Push (Google Search) and 35% Remarketing. Monitored daily metrics to create optimization reports."
            },
            impact: {
                vi: "Góp phần giúp chiến dịch Google Search đạt CPC lý tưởng 2.000 VNĐ. Học hỏi và nắm vững quy trình A/B testing thực tế trên Meta Ads.",
                en: "Contributed to achieving a highly efficient 2,000 VND CPC on Search. Gained solid practical experience in Meta Ads A/B testing."
            },
            chart: {
                type: 'doughnut',
                labels: { vi: ['Google Search (65%)', 'Meta Ads (35%)'], en: ['Google Search (65%)', 'Meta Ads (35%)'] },
                data: [65, 35],
                colors: ['#3b82f6', '#8b5cf6'],
                title: { vi: 'Phân bổ ngân sách chiến dịch', en: 'Campaign Budget Allocation' }
            }
        },
        hungphat: {
            title: "Thép Hùng Phát - Technical SEO",
            tags: ["On-page SEO", "Tech Content"],
            shortDesc: {
                vi: "Hỗ trợ team SEO xây dựng cấu trúc Topic Cluster chuyên sâu về luyện kim. Góp phần kéo hàng chục ngàn click tự nhiên.",
                en: "Collaborated with the SEO team on technical content, contributing to massive organic growth."
            },
            role: { vi: "Hỗ trợ SEO Content", en: "SEO Content Assistant" },
            context: {
                vi: "Thị trường B2B ngành vật liệu xây dựng (thép công nghiệp) có tính cạnh tranh từ khóa ngách cực kỳ cao. Khách hàng cần thông số chính xác trước khi mua hàng.",
                en: "The B2B industrial steel market has extremely high search intent competition."
            },
            strategy: {
                vi: "Phối hợp cùng team SEO xây dựng cụm nội dung (Topic Cluster) kỹ thuật. Trực tiếp biên tập On-page và chuẩn hóa các bảng thông số trọng lượng thép.",
                en: "Collaborated with the SEO team to build technical Topic Clusters. Directly optimized on-page elements for technical specification tables."
            },
            impact: {
                vi: "Nỗ lực của toàn team đã mang về hơn 95.700 lượt nhấp (Clicks) và 2,9 triệu lượt hiển thị, đẩy các key khó như 'thép i' (Top 1.6) và 'sắt v3' (Top 1.4) lên đỉnh Google.",
                en: "The team's collective effort drove 95,700+ organic clicks and ranked difficult keywords like 'thép i' (Pos: 1.6) to the Top of Google."
            },
            chart: {
                type: 'line',
                labels: { vi: ['Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'], en: ['Mar', 'Apr', 'May', 'Jun'] },
                data: [15000, 32000, 68000, 95700],
                colors: ['#f59e0b'],
                title: { vi: 'Tăng trưởng Organic Traffic (Clicks)', en: 'SEO Organic Growth (Clicks)' }
            }
        }
    }
};