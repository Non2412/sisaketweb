import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen py-5">
      <div className="container">
        {/* Hero Section with Modern Design */}
        <div className="modern-card mb-5 animate-fade-in">
          <div className="row g-0">
            <div className="col-lg-6 p-5">
              <span className="badge badge-modern mb-3"> เฉลิมฉลอง 243 ปี ศรีสะเกษ</span>
              <h1 className="display-4 fw-bold mb-3" style={{color: '#6F42C1'}}>
                เสื้อเฉลิมฉลองเนื่องในโอกาส 243 ปี
              </h1>
              <p className="lead text-muted mb-4">
                ร่วมเป็นส่วนหนึ่งของการเฉลิมฉลองครั้งประวัติศาสตร์ สั่งซื้อเสื้อโปโลเพื่อการกุศลได้แล้ววันนี้
              </p>
              <Link href="/order" className="btn btn-gradient-primary btn-lg">
                 สั่งซื้อเสื้อเลย
              </Link>
            </div>
            <div className="col-lg-6 p-4 d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <div className="row g-3 w-100">
                <div className="col-6">
                  <div className="product-card bg-white p-4 text-center">
                    <div style={{fontSize: '4rem'}} className="mb-2"></div>
                    <h5 className="fw-bold mb-1">เสื้อแบบที</h5>
                    <p className="text-muted small mb-0">ลายไทยคลาสสิก</p>
                    <p className="text-primary fw-bold mt-2">198 บาท</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="product-card bg-white p-4 text-center">
                    <div style={{fontSize: '4rem'}} className="mb-2"></div>
                    <h5 className="fw-bold mb-1">เสื้อโพโล</h5>
                    <p className="text-muted small mb-0">สไตล์โมเดิร์น</p>
                    <p className="text-primary fw-bold mt-2">198 บาท</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="stats-card text-center">
              <div style={{fontSize: '2.5rem'}} className="mb-2"></div>
              <h2 className="fw-bold mb-1">1,778</h2>
              <p className="mb-0 opacity-90">คำสั่งซื้อทั้งหมด</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card stats-card-gold text-center">
              <div style={{fontSize: '2.5rem'}} className="mb-2"></div>
              <h2 className="fw-bold mb-1">29,147</h2>
              <p className="mb-0 opacity-90">เสื้อที่สั่งทั้งหมด</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card stats-card-green text-center">
              <div style={{fontSize: '2.5rem'}} className="mb-2"></div>
              <h2 className="fw-bold mb-1">25,849</h2>
              <p className="mb-0 opacity-90">เสื้อแบบที</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-card stats-card-purple text-center">
              <div style={{fontSize: '2.5rem'}} className="mb-2"></div>
              <h2 className="fw-bold mb-1">3,298</h2>
              <p className="mb-0 opacity-90">เสื้อโพโล</p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <div className="modern-card p-5">
              <h3 className="fw-bold mb-4"> รายละเอียดสินค้า</h3>
              
              <div className="mb-4 p-4 rounded-3" style={{background: 'linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%)'}}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold text-primary mb-2"> เสื้อสีทอง (ลายไทย)</h5>
                    <p className="text-muted mb-2">ราคา: <strong>198 บาท</strong></p>
                    <p className="small mb-0">เสื้อแบบที พร้อมลายไทยสวยงาม</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h5 className="fw-bold text-dark mb-2"> เสื้อสีดำ (ลายโมเดิร์น)</h5>
                    <p className="text-muted mb-2">ราคา: <strong>198 บาท</strong></p>
                    <p className="small mb-0">เสื้อโพโลสไตล์โมเดิร์น</p>
                  </div>
                </div>
              </div>

              <div className="alert alert-info mb-0">
                <h6 className="fw-bold mb-2">ℹ ข้อมูลการสั่งซื้อ</h6>
                <ul className="mb-0 ps-3">
                  <li>ราคาเริ่มต้น 50 บาท</li>
                  <li>ค่าจัดส่งทางไปรษณีย์ 10 บาท</li>
                  <li>ส่งสินค้าภายใน 26 ส.ค. 2568</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="modern-card p-4 mb-4">
              <h5 className="fw-bold mb-3"> ช่องทางการสั่งซื้อ</h5>
              <div className="d-grid gap-2">
                <Link href="/login" className="btn btn-primary-custom">
                   เข้าสู่ระบบเพื่อสั่งซื้อ
                </Link>
                <button className="btn btn-outline-secondary">
                   LINE: @sisaketshirt
                </button>
              </div>
            </div>

            <div className="modern-card p-4">
              <h5 className="fw-bold mb-3"> ติดต่อเรา</h5>
              <div className="small">
                <p className="mb-2"><strong>โทร:</strong> 093-368-1830</p>
                <p className="mb-2"><strong>อีเมล:</strong> info@sisaket243.com</p>
                <p className="mb-0"><strong>เวลาทำการ:</strong> จันทร์-ศุกร์ 09:00-17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Size Chart */}
        <div className="modern-card p-5">
          <h3 className="fw-bold mb-4"> ตารางไซส์เสื้อ (รอบเริ่มต้น)</h3>
          
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="text-primary mb-3">เสื้อแบบที</h5>
              <div className="row g-2">
                {[
                  {size: 'S', count: '3,388'},
                  {size: 'M', count: '6,940'},
                  {size: 'L', count: '8,638'},
                  {size: 'XL', count: '9,181'},
                  {size: '2XL', count: '877'},
                  {size: '3XL', count: '728'},
                  {size: '4XL', count: '240'},
                  {size: '5XL', count: '173'},
                ].map((item) => (
                  <div key={item.size} className="col-3">
                    <div className="p-3 rounded-3 text-center" style={{background: 'linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%)'}}>
                      <div className="fw-bold">{item.size}</div>
                      <small className="text-muted">{item.count} ตัว</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="text-dark mb-3">เสื้อโพโล</h5>
              <div className="row g-2">
                {[
                  {size: '3XS', count: '543'},
                  {size: 'S', count: '2,945'},
                  {size: 'M', count: '578'},
                  {size: 'L', count: '793'},
                  {size: '2XL', count: '643'},
                  {size: '3XL', count: '621'},
                  {size: '4XL', count: '207'},
                  {size: '5XL', count: '148'},
                ].map((item) => (
                  <div key={item.size} className="col-3">
                    <div className="p-3 rounded-3 text-center bg-light">
                      <div className="fw-bold">{item.size}</div>
                      <small className="text-muted">{item.count} ตัว</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
