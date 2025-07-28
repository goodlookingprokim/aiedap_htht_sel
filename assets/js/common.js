/**
 * AIDT HTHT×SEL 공통 JavaScript
 */

// 전역 네임스페이스
window.AIDT = window.AIDT || {};

// 공통 유틸리티 함수들
AIDT.utils = {
    // 로컬 스토리지 헬퍼
    storage: {
        set: function(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.error('localStorage set error:', e);
                return false;
            }
        },
        
        get: function(key, defaultValue = null) {
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : defaultValue;
            } catch (e) {
                console.error('localStorage get error:', e);
                return defaultValue;
            }
        },
        
        remove: function(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.error('localStorage remove error:', e);
                return false;
            }
        }
    },
    
    // URL 헬퍼
    url: {
        getParams: function() {
            const params = new URLSearchParams(window.location.search);
            const result = {};
            for (let [key, value] of params) {
                result[key] = value;
            }
            return result;
        },
        
        setParam: function(key, value) {
            const url = new URL(window.location);
            url.searchParams.set(key, value);
            window.history.replaceState({}, '', url);
        }
    },
    
    // DOM 헬퍼
    dom: {
        ready: function(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        },
        
        $(selector) {
            return document.querySelector(selector);
        },
        
        $$(selector) {
            return document.querySelectorAll(selector);
        },
        
        addClass: function(element, className) {
            if (element && className) {
                element.classList.add(className);
            }
        },
        
        removeClass: function(element, className) {
            if (element && className) {
                element.classList.remove(className);
            }
        },
        
        toggleClass: function(element, className) {
            if (element && className) {
                element.classList.toggle(className);
            }
        }
    },
    
    // 이벤트 헬퍼
    events: {
        on: function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler);
            }
        },
        
        off: function(element, event, handler) {
            if (element && event && handler) {
                element.removeEventListener(event, handler);
            }
        },
        
        trigger: function(element, event, data = {}) {
            if (element && event) {
                const customEvent = new CustomEvent(event, { detail: data });
                element.dispatchEvent(customEvent);
            }
        }
    },
    
    // 폼 헬퍼
    form: {
        serialize: function(form) {
            const formData = new FormData(form);
            const data = {};
            for (let [key, value] of formData) {
                data[key] = value;
            }
            return data;
        },
        
        validate: function(form, rules = {}) {
            const errors = {};
            const data = this.serialize(form);
            
            Object.keys(rules).forEach(field => {
                const rule = rules[field];
                const value = data[field];
                
                if (rule.required && (!value || value.trim() === '')) {
                    errors[field] = '필수 입력 항목입니다.';
                }
                
                if (rule.minLength && value && value.length < rule.minLength) {
                    errors[field] = `최소 ${rule.minLength}자 이상 입력해주세요.`;
                }
                
                if (rule.pattern && value && !rule.pattern.test(value)) {
                    errors[field] = rule.message || '올바른 형식이 아닙니다.';
                }
            });
            
            return {
                isValid: Object.keys(errors).length === 0,
                errors: errors
            };
        }
    },
    
    // 날짜 헬퍼
    date: {
        format: function(date, format = 'YYYY-MM-DD') {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            
            return format
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day)
                .replace('HH', hours)
                .replace('mm', minutes);
        }
    }
};

// 네비게이션 관리
AIDT.navigation = {
    init: function() {
        this.setActiveNavItem();
        this.initBreadcrumb();
    },
    
    setActiveNavItem: function() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href && link.href.includes(currentPath)) {
                link.classList.add('active');
            }
        });
    },
    
    initBreadcrumb: function() {
        const breadcrumb = document.querySelector('.breadcrumb');
        if (!breadcrumb) return;
        
        const pathSegments = window.location.pathname.split('/').filter(segment => segment);
        const breadcrumbList = breadcrumb.querySelector('.breadcrumb-list');
        
        if (breadcrumbList) {
            // 홈 링크 추가
            breadcrumbList.innerHTML = `
                <li class="breadcrumb-item">
                    <a href="/" class="breadcrumb-link">홈</a>
                </li>
            `;
            
            // 경로별 브레드크럼 추가
            let currentPath = '';
            pathSegments.forEach((segment, index) => {
                currentPath += '/' + segment;
                const isLast = index === pathSegments.length - 1;
                const segmentName = this.getSegmentName(segment);
                
                if (isLast) {
                    breadcrumbList.innerHTML += `
                        <li class="breadcrumb-item">
                            <span class="breadcrumb-current">${segmentName}</span>
                        </li>
                    `;
                } else {
                    breadcrumbList.innerHTML += `
                        <li class="breadcrumb-item">
                            <a href="${currentPath}" class="breadcrumb-link">${segmentName}</a>
                        </li>
                    `;
                }
            });
        }
    },
    
    getSegmentName: function(segment) {
        const segmentNames = {
            'pages': '페이지',
            'instructor': '강사 자료',
            'resources': '자료실',
            'intro': '소개',
            'project-wizard': '프로젝트 기획',
            'emotion-recognition': '감정 인식 활동',
            'sel-competency': 'SEL 역량 개발',
            'ai-interaction': 'AI 상호작용',
            'collaboration': '협업 공간',
            'manual': '강사 메뉴얼',
            'lesson-plans': '수업 계획',
            'activities': '활동 가이드',
            'assessment': '평가 도구'
        };
        
        return segmentNames[segment] || segment;
    }
};

// 알림 시스템
AIDT.notification = {
    show: function(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // 스타일 추가
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;
        
        // 타입별 색상
        const colors = {
            info: '#3498db',
            success: '#2ecc71',
            warning: '#f1c40f',
            error: '#e74c3c'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        notification.style.color = 'white';
        
        document.body.appendChild(notification);
        
        // 자동 제거
        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, duration);
        }
    }
};

// 로딩 상태 관리
AIDT.loading = {
    show: function(target = document.body) {
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p>로딩 중...</p>
            </div>
        `;
        
        loader.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        target.style.position = 'relative';
        target.appendChild(loader);
    },
    
    hide: function(target = document.body) {
        const loader = target.querySelector('.loading-overlay');
        if (loader) {
            loader.remove();
        }
    }
};

// 초기화
AIDT.utils.dom.ready(function() {
    AIDT.navigation.init();
    
    // 공통 이벤트 리스너
    document.addEventListener('click', function(e) {
        // 외부 링크 새 창으로 열기
        if (e.target.matches('a[href^="http"]') && !e.target.matches('a[href*="' + location.hostname + '"]')) {
            e.preventDefault();
            window.open(e.target.href, '_blank', 'noopener,noreferrer');
        }
    });
    
    // 키보드 네비게이션 지원
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // 모달이나 드롭다운 닫기
            const modals = document.querySelectorAll('.modal.show, .dropdown.show');
            modals.forEach(modal => modal.classList.remove('show'));
        }
    });
});

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);