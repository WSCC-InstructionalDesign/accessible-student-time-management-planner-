# Student Time Management Planner

A comprehensive, accessible web application designed to help students create realistic weekly schedules that balance academics, work, and personal life.

![Student Time Management Planner](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue)

## ✨ Features

### 📊 **4-Step Planning Process**
1. **Time Estimation** - Estimate weekly hours for different life activities
2. **Work Schedule** - Input work hours with automatic calendar blocking
3. **Class Schedule** - Add academic classes with meeting times
4. **Calendar Building** - Interactive scheduling with 30-minute time blocks

### 🎯 **Smart Recommendations**
- Real-time progress tracking for each activity category
- Visual progress bars showing completion status
- Intelligent warnings for over-scheduled weeks (>168 hours)
- Personalized suggestions for time reallocation

### ♿ **Universal Design for Learning (UDL) & Accessibility**
- **WCAG 2.1 AA compliant** - Full screen reader support
- **Keyboard navigation** - Complete keyboard accessibility
- **Multiple means of representation** - Visual, auditory, and text feedback
- **Live announcements** - Dynamic updates announced to assistive technology
- **Skip navigation** - Quick access to main content
- **Semantic HTML** - Proper landmarks and heading structure

### 🎨 **User-Friendly Interface**
- **30-minute time blocks** - Precise scheduling granularity
- **Category icons** - Visual identification for activity types
- **Drag-and-drop style** - Click activity blocks then place on calendar
- **Full-size activity blocks** - Activities fill entire time slots
- **Export functionality** - Save schedules as CSV or JSON

### 🌙 **Smart Sleep Handling**
- Sleep time automatically counted from estimates
- No need to manually place sleep blocks
- Focuses scheduling on active waking activities

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-time-manager.git
   cd student-time-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📖 How to Use

### Step 1: Estimate Your Weekly Hours
- Enter estimated hours for each life category (sleep, work, classes, etc.)
- System validates total doesn't exceed 168 hours per week
- Get warnings and suggestions for unrealistic schedules

### Step 2: Work Schedule
- Input work hours for each day of the week
- Add optional location information
- Work blocks automatically appear on calendar

### Step 3: Class Schedule
- Add each class with meeting days and times
- Include credit hours for study time recommendations
- System calculates recommended study hours (credits × 2)

### Step 4: Build Your Calendar
- Select activity blocks to place on calendar
- Click time slots to schedule activities
- Track progress with real-time recommendations
- Export completed schedule

## 🛠️ Technical Details

### Built With
- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Modern JavaScript** - ES6+ features

### Key Components
- `StudentTimeManager` - Main application component
- `CategoryBlock` - Interactive activity selection blocks
- `CalendarCell` - Individual calendar time slots
- `RecommendationsPanel` - Progress tracking interface

### Accessibility Features
- Screen reader support with live announcements
- Keyboard-only navigation capability
- High contrast compatible design
- Semantic HTML structure
- ARIA labels and descriptions
- Error handling and validation

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] **Mobile App** - React Native version
- [ ] **Data Persistence** - Save schedules locally/cloud
- [ ] **Templates** - Pre-built schedule templates
- [ ] **Integration** - Google Calendar sync
- [ ] **Analytics** - Time tracking insights
- [ ] **Collaboration** - Share schedules with advisors

## 🧪 Testing

```bash
# Run tests
npm test

# Run accessibility tests
npm run test:a11y

# Run all tests with coverage
npm run test:coverage
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Universal Design for Learning (UDL)** principles
- **Web Content Accessibility Guidelines (WCAG) 2.1**
- Student feedback and testing
- Accessibility community best practices

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/student-time-manager/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/student-time-manager/discussions)
- **Email**: support@yourdomain.com

## 🌟 Show Your Support

Give a ⭐️ if this project helped you organize your time better!

---

**Built with ❤️ for students, by students**
