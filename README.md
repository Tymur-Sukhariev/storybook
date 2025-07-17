# 🎨 React Component Library

A modern, reusable component library built with React, TypeScript, and Storybook. This library provides essential UI components for forms, navigation, and user feedback.

## 🚀 Setup Instructions

### ✅ Prerequisites
* **Node.js** (v16 or higher)
* **npm or yarn** package manager

### 📦 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd component-library
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start Storybook development server:**
```bash
npm run storybook
# or
yarn storybook
```

4. **Open your browser** and navigate to `http://localhost:6006` to view the component library.

### 🔨 Building for Production

```bash
npm run build-storybook
# or
yarn build-storybook
```

## 🧩 Component Overview

### 📝 Input Components

#### ⚡ SmartInput
A versatile input component that supports both text and password fields with additional features.

**✨ Features:**
* **Text and password input types**
* **Password visibility toggle**
* **Clear button**
* **Ref forwarding** for external control
* **Accessible design** with proper ARIA labels

**🔧 Props:**
* `type`: `'text' | 'password'` - Input type
* `clearable`: `boolean` - Whether to show clear button

**📸 Screenshots:**

Password input with hidden text and eye icon:
<img width="1280" height="564" alt="1" src="https://github.com/user-attachments/assets/f6d063b3-0500-4327-b600-80edf476a4a5" />

Password input with visible text :
<img width="1280" height="564" alt="2" src="https://github.com/user-attachments/assets/c1a28ec0-a4b5-4295-9357-bdbdc332385b" />

Text input with clearable functionality:
<img width="1280" height="800" alt="3" src="https://github.com/user-attachments/assets/7fa6299c-c58f-41da-b2ca-155198a727b8" />


### 💬 Feedback Components

#### 🍞 Toast
A notification component for displaying temporary messages to users.

**✨ Features:**
* **Three types**: success, fail, and default
* **Configurable duration**
* **Auto-dismiss functionality**
* **Smooth animations**
* **Customizable styling** per type

**🔧 Props:**
* `type`: `'success' | 'fail' | 'default'` - Toast variant (default: 'default')
* `text`: `string` - Message to display
* `duration`: `number` - Auto-dismiss time in milliseconds (default: 3000)

**📸 Screenshots:**
Success toast with green styling:
<img width="1280" height="800" alt="4" src="https://github.com/user-attachments/assets/7e602c00-b187-45f1-bf3f-310f13ee7b0d" />

Fail toast with red styling:
<img width="1280" height="800" alt="5" src="https://github.com/user-attachments/assets/43eb52a3-ad89-4785-a934-31bd4e61a467" />


### 🧭 Navigation Components

#### 📋 SidebarMenuWrapper
A collapsible sidebar navigation component supporting multi-level menu structures.

**✨ Features:**
* **Single and multi-level menu support**
* **Smooth animations** using Framer Motion
* **Click outside to close**
* **Expandable/collapsible menu items**
* **Customizable open state**
* **Overlay backdrop**

**🔧 Props:**
* `items`: `MenuItem[]` - Array of menu items
* `isOnStartOpen`: `boolean` - Whether sidebar is open initially (default: false)

**📋 MenuItem Interface:**
```tsx
interface MenuItem {
  label: string;
  children?: MenuItem[];
}
```

**📸 Screenshots:**
Sidebar showing initially in open state. One level:
<img width="1280" height="596" alt="6" src="https://github.com/user-attachments/assets/761acc59-32cb-407d-96f7-0c0106114621" />

Sidebar with menu items, which is closed initially. Two levels:
<img width="1280" height="587" alt="7" src="https://github.com/user-attachments/assets/810ea8bb-9860-42b2-82c4-40c393f72eb5" />


## 🎨 Styling

All components use CSS modules for styling, ensuring:
* **Scoped styles** to prevent conflicts
* **Consistent design system**
* **Easy customization**
* **Performance optimization**

## 🧪 Testing with Storybook

Each component includes comprehensive Storybook stories demonstrating:
* **Different component states**
* **Various prop combinations**
* **Interactive examples**
* **Visual regression testing**

### 📚 Available Stories:

**📝 Input Stories:**
* **Text input** (basic)
* **Password input** (with toggle)
* **Clearable text input**
* **Clearable password input**

**💬 Feedback Stories:**
* **Success toast**
* **Fail toast**  
* **Default toast**

**🧭 Navigation Stories:**
* **One-level menu** (open by default)
* **Two-level menu** (closed by default)

## 🛠️ Development

### 📁 File Structure
```
src/
├── components/
│   ├── SmartInput/
│   ├── Toast/
│   └── SidebarMenuWrapper/
├── stories/
│   ├── Input.stories.tsx
│   ├── Feedback.stories.tsx
│   └── Navigation.stories.tsx
├── styles/
│   ├── smartInput.module.css
│   ├── toast.module.css
│   └── sidebar.module.css
└── data/
    └── menuItems.ts
```

### 🔧 Technologies Used
* **⚛️ React** - Component library
* **📘 TypeScript** - Type safety
* **📖 Storybook** - Component documentation and testing
* **🎬 Framer Motion** - Animations
* **🎨 CSS Modules** - Scoped styling

## 🤝 Contributing

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
3. **✏️ Make your changes**
4. **📚 Add/update stories** for new components
5. **🧪 Test thoroughly**
6. **📤 Submit a pull request**

